import { AppState } from "./types";

export const selectProducts = (state: AppState) => state.products.products;
