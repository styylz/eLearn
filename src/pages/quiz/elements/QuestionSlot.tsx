import { FlexWrapper, Image, Typography } from "components";
import React from "react";
import styled from "styled-components/macro";
import { Visuals } from "utils/visuals";

interface Question {
  title: string;
  setScore: (category: string, score: number) => void;
  image: Visuals;
  category?: string;
  score?: number;
}

export const QuestionSlot: React.FC<Question> = ({
  title,
  setScore,
  image,
  category,
  score,
}) => {
  if (category === undefined) {
    category = "never";
    score = 0;
  }
  return (
    <QuestionCardStyled onClick={() => setScore(category!, score!)}>
      <Typography type="h5">{title}</Typography>
      <Image src={image} alt={image} />
    </QuestionCardStyled>
  );
};

const QuestionCardStyled = styled(FlexWrapper)`
  justify-content: space-between;
  align-items: center;
  box-shadow: 3.5px 7px 6px 1px hsl(0deg 0% 0% / 10%);
  border-radius: 1rem;
  min-width: 13.75rem;
  max-width: 15rem;
  height: 3.75rem;
  padding: 1rem;

  &:hover {
    box-shadow: rgb(0 255 4 / 32%) 0px 0px 0px 2px,
      rgb(50 139 18 / 45%) 0px 4px 6px -1px,
      rgb(255 255 255 / 8%) 0px 1px 0px inset;
  }
`;
