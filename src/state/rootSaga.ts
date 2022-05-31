import { all } from "redux-saga/effects";
import { plansSagas } from "./plans/PlansSagas";
import { productsSagas } from "./products/ProductsSagas";
import { quizQuestionsSagas } from "./quiz/QuizSaga";

export default function* rootSaga(): Generator {
  yield all([productsSagas(), quizQuestionsSagas(), plansSagas()]);
}
