import { AppState } from "./types";

export const selectProducts = (state: AppState) => state.products.products;

export const selectEmail = (state: AppState) => state.email.email;

export const selectFreeCourse = (state: AppState) => state.products.freeCourse;

export const selectQuizQuestions = (state: AppState) =>
  state.questions.questions;

export const selectPlans = (state: AppState) => state.plans.plans;
