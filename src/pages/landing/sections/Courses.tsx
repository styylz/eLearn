import {
  Container,
  FlexWrapper,
  SectionWrapper,
  Typography,
  ProductCard,
  GreenButton,
  Box,
} from "components";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "state/selectors";

export const Courses: React.FC = () => {
  const products = useSelector(selectProducts);
  console.log(products);
  return (
    <SectionWrapper id="courses">
      <Container>
        <Typography type="h2" marginBottom="s16" textAlign="center">
          Get a choice of your course
        </Typography>
        <FlexWrapper justifyContent="center" flexWrap="wrap" margin="auto">
          <ProductCard
            id="1"
            title="test"
            avatar=""
            name="john"
            price="1"
            background=""
          />
          <Box marginTop="s32">
            <GreenButton> Check for more courses</GreenButton>
          </Box>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
