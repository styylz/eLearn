import axios from "axios";
import { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { fetchProductsAction } from "./ProductsActions";
import { setProducts } from "./ProductsSlice";

export function* fetchProductsSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(
      `${process.env.GATSBY_URL}/products`
    );

    yield put(setProducts(data));
  } catch (error) {
    yield console.error({ error });
  }
}

export function* productsSagas() {
  yield takeEvery(fetchProductsAction, fetchProductsSaga);
}
