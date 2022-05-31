import { configureStore } from "@reduxjs/toolkit";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { ProductsData, quizQuestionsData } from "./types";
import productsSlice from "./products/ProductsSlice";
import rootSaga from "./rootSaga";
import quizQuestionsSlice from "./quiz/QuizSlice";

export interface RootState {
  products: ProductsData;
  questions: quizQuestionsData;
}

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers<CombinedState<RootState>>({
  products: productsSlice.reducer,
  questions: quizQuestionsSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
