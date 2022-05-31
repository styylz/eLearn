import { FreeCourse } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "state/types";

interface ProductsState {
  products: Product[];
  freeCourse: FreeCourse;
}

const initialState: ProductsState = {
  products: [],
  freeCourse: {
    id: "",
    title: "",
    name: "",
    price: null as unknown as number,
    category: "",
    isFree: true,
    avatar: "",
    background: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, actions: PayloadAction<Product[]>) => {
      state.products = actions.payload;
    },
    setFreeCourse: (state, action: PayloadAction<FreeCourse>) => {
      state.freeCourse = action.payload;
    },
  },
});

export const { setProducts, setFreeCourse } = productsSlice.actions;
export default productsSlice.reducer;
