import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "state/types";

interface QuizState {
  questions: Question[];
}

const initialState: QuizState = {
  questions: [],
};

const quizQuestionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuizQuestions: (state, actions: PayloadAction<Question[]>) => {
      state.questions = actions.payload;
    },
  },
});

export const { setQuizQuestions } = quizQuestionsSlice.actions;
export default quizQuestionsSlice;
