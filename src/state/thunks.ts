import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { EmailData } from "./types";

const postEmailPrefix = "email/POST_EMAIL";

export const postEmail = createAsyncThunk(
  postEmailPrefix,
  async (email: Omit<EmailData, "status">) => {
    try {
      axios({
        method: "POST",
        url: `${process.env.GATSBY_URL}/email`,
        data: email,
      });
    } catch (error) {
      const errRes = (error as AxiosError).response;
      if (errRes) {
        console.log(errRes);
      }
    }
  }
);
