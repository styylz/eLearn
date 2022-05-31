import axios from "axios";
import { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { fetchQuizQuestionsAction } from "./QuizActions";
import { setQuizQuestions } from "./QuizSlice";

export function* fetchQuizQuestionsSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(
      `${process.env.GATSBY_URL}/Questions`
    );

    yield put(setQuizQuestions(data));
  } catch (error) {
    yield console.error(error);
  }
}

export function* quizQuestionsSagas() {
  yield takeEvery(fetchQuizQuestionsAction, fetchQuizQuestionsSaga);
}
