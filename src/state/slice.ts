import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Statuses } from "typings/generalTypes";
import { postEmail } from "./thunks";

interface EmailState {
  email: string;
  status: Statuses;
}

export const initialState: EmailState = {
  email: "",
  status: "idle",
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<EmailState["email"]>) => {
      if (action.payload) {
        state.email = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postEmail.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(postEmail.rejected, (state, _) => {
      state.status = "error";
    });
    builder.addCase(postEmail.fulfilled, (state, _) => {
      state.status = "success";
    });
  },
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;
