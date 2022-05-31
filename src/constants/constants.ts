import { Visuals } from "utils/visuals";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  image: Visuals;
}

export interface PRO {
  id: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  age: number;
  location: string;
  rating: number;
  description: string;
  image: Visuals;
}

export const BENEFITS: Benefit[] = [
  {
    id: "1",
    title: "16K+ Online Courses",
    description: "Quickly compare thousands of make tours by reading genuine",
    image: "mediaGreen",
  },
  {
    id: "2",
    title: "Expert Instructor",
    description: "",
    image: "mediaGreen",
  },
  {
    id: "3",
    title: "18M Happy Students",
    description: "Quickly compare thousands of make tours by reading genuine",
    image: "mediaGreen",
  },
];

export const PROS: PRO[] = [
  {
    id: "1",
    title: "Improve your brain function",
    description:
      "Research shows there are several ways to improve the health of your brain and learning something new is one of them.",
  },
  {
    id: "2",
    title: "Meet new people",
    description:
      "Taking up a new hobby or sport or going to a class to learn something new is a great way to meet new people.",
  },
  {
    id: "3",
    title: "Become involved in your community",
    description:
      "Depending on what you learn, you may develop a sense of feeling more connected to your community.",
  },
  {
    id: "4",
    title: "Feel good about your new skill",
    description:
      "Setting yourself a goal to learn something new, then achieving it, is super rewarding and gives you a sense of accomplishment.",
  },
  {
    id: "5",
    title: "Have fun",
    description:
      "While learning something new may be challenging, it can also be heaps of fun. ",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Emily",
    age: 28,
    location: "Delaware, Nj",
    rating: 5,
    description:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
    image: "donald",
  },
  {
    id: "2",
    name: "John",
    age: 40,
    location: "Los Angeles",
    rating: 5,
    description:
      "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. ",
    image: "truluck",
  },
  {
    id: "3",
    name: "Xanter",
    age: 51,
    location: "San Francisco, CA",
    rating: 5,
    description: `I have many friends who practice programming and I am very proud of myself that I have choosen this way. Feeling better is my biggest motivation.  Feeling better is my biggest motivation.  Feeling better is my biggest motivation.  Feeling IT is my biggest motivation.
      `,
    image: "rhayahn",
  },
];

export interface AboutPlan {
  id: string;
  title: string;
  description: string;
}

export const ABOUTPLANS: AboutPlan[] = [
  {
    id: "1",
    title: "High quality materials",
    description: "We provide highest materials",
  },
  {
    id: "2",
    title: "Career Advancement",
    description: "Learn at lower prices",
  },
  {
    id: "3",
    title: "Career Advancement",
    description: "We provide highest materials",
  },
];
