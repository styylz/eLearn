import { all } from "redux-saga/effects";
import { productsSagas } from "./products/ProductsSagas";

export default function* rootSaga(): Generator {
  yield all([productsSagas()]);
}
