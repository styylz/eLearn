import { rootReducer } from "./store";
import { Visuals } from "utils/visuals";
import { Statuses } from "typings/generalTypes";

export interface FreeCourse extends Product {}

export interface Product {
  id: string;
  title: string;
  name: string;
  price: number;
  category: string;
  isFree: boolean;
  background: Visuals;
  avatar: Visuals;
}

export interface Plan {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  currPrice?: number;
  description: string;
  discount?: string;
  selected?: boolean;
}

interface AnswerOption {
  label: string;
  value: { category?: string; score?: number };
}

export interface Question {
  id: string;
  questionText: string;
  answerOptions: AnswerOption[];
}

export interface EmailData {
  email: string;
  status: Statuses;
}

export interface ProductsData {
  products: Product[];
  freeCourse: FreeCourse;
}

export interface PlansData {
  plans: Plan[];
}

export interface quizQuestionsData {
  questions: Question[];
}

export type AppState = ReturnType<typeof rootReducer>;
