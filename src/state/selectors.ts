import { AppState } from "./types";

export const selectProducts = (state: AppState) => state.products.products;
export const selectQuizQuestions = (state: AppState) =>
  state.questions.questions;
