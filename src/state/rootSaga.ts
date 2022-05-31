import { all } from "redux-saga/effects";
import { productsSagas } from "./products/ProductsSagas";
import { quizQuestionsSagas } from "./quiz/QuizSaga";

export default function* rootSaga(): Generator {
  yield all([productsSagas(), quizQuestionsSagas()]);
}
