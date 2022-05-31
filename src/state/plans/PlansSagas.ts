import axios from "axios";
import { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { fetchPlansAction } from "./PlansActions";
import { setPlans } from "./PlansSlice";

export function* fetchPlansSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(
      `${process.env.GATSBY_URL}/plans`
    );

    yield put(setPlans(data));
  } catch (error) {
    yield console.error({ error });
  }
}

export function* plansSagas() {
  yield takeEvery(fetchPlansAction, fetchPlansSaga);
}
