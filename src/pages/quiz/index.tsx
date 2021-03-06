import {
  Container,
  FlexWrapper,
  GreenButton,
  Typography,
  Box,
  SectionWrapper,
} from "components";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectProducts, selectQuizQuestions } from "state/selectors";
import { ProgressBar, QuestionSlot } from "./elements";
import { Score } from "typings/types";
import { calcMaxCategoryValue } from "utils/calculate";
import { useAppDispatch } from "state/store";
import { Product } from "state/types";
import { fetchQuizQuestionsAction } from "state/quiz/QuizActions";
import { setFreeCourse } from "state/products/ProductsSlice";

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [mostPopularCategory, setMostPopularCategory] = useState<string>("");
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [score, setScore] = useState<Score>({
    design: 0,
    uiUx: 0,
    IT: 0,
  });

  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);
  const questions = useSelector(selectQuizQuestions);

  const handleScore = (name: string, scr: number): void => {
    const nextQuestion = currentQuestion + 1;
    const isAllValuesAreZeroes = Object.values(score).every((e) => e === 0);
    if (name === "never") {
      setCurrentQuestion(nextQuestion);
      setProgressBarValue(progressBarValue + 1);
      setScore(score);
    }

    if (isAllValuesAreZeroes) {
      navigate("/quiz");
    }

    if (name && scr && !showScore) {
      setScore({
        ...score,
        [name]: (scr = score[name as keyof Score] + scr),
      });

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setProgressBarValue(progressBarValue + 1);
      } else {
        setShowScore(true);
        setProgressBarValue(progressBarValue + 1);
      }
    }
  };

  const handleSubmit = (obj: Score): void => {
    const { max } = calcMaxCategoryValue(obj);
    setMostPopularCategory(max[0]);
    setLoading(true);

    setTimeout(() => {
      navigate("/email");
    }, 2000);
  };

  useEffect(() => {
    const newItem = products?.find(
      ({ category, isFree }) => category === mostPopularCategory && isFree
    );

    dispatch(setFreeCourse(newItem as Product));
  }, [mostPopularCategory]);

  useEffect(() => {
    dispatch(fetchQuizQuestionsAction());
  }, []);

  return (
    <>
      {loading ? (
        <Box margin="auto" position="absolute" top="50%" left="50%">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </Box>
      ) : (
        <>
          <ProgressBar value={progressBarValue} max={questions.length} />
          <SectionWrapper>
            <Container>
              <FlexWrapper flexDirection="column" alignItems="center">
                <Typography type="h1" marginBottom="s32" textAlign="center">
                  {questions[currentQuestion]?.questionText}
                </Typography>
                <FlexWrapper flexDirection="column" alignItems="center">
                  {questions[currentQuestion]?.answerOptions.map(
                    ({ label, value: { category }, value: { score } }) => (
                      <FlexWrapper
                        justifyContent="center"
                        width="12.5rem"
                        marginBottom="s8"
                      >
                        <QuestionSlot
                          title={label}
                          setScore={handleScore}
                          category={category}
                          score={score}
                          image="arrow"
                        />
                      </FlexWrapper>
                    )
                  )}
                  {showScore ? (
                    <Box marginX="auto" marginTop="s24">
                      <GreenButton onClick={() => handleSubmit(score)}>
                        Submit
                      </GreenButton>
                    </Box>
                  ) : (
                    ""
                  )}
                </FlexWrapper>
              </FlexWrapper>

              <Typography type="h3">{mostPopularCategory}</Typography>
            </Container>
          </SectionWrapper>
        </>
      )}
    </>
  );
};

export default Quiz;
