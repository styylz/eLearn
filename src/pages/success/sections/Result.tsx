import React from "react";
import {
  Container,
  FlexWrapper,
  ProductCard,
  SectionWrapper,
  Typography,
  GreenButton,
  Box,
} from "components";
import { useSelector } from "react-redux";
import { selectEmail, selectFreeCourse } from "state/selectors";
import { Link } from "gatsby";
import styled from "styled-components/macro";

export const Result = () => {
  const freeCourse = useSelector(selectFreeCourse);
  const email = useSelector(selectEmail);

  const { id, title, name, price, background, avatar } = freeCourse;

  return (
    <SectionWrapper>
      <Container>
        <StyledFlexContainer>
          <FlexWrapper
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography type="h1">SHEEEEEEEEEEEEEEESH</Typography>
            <Typography type="h2">You won a free course</Typography>

            <ProductCard
              id={id}
              title={title}
              name={name}
              price={price}
              background={background}
              avatar={avatar}
            />
          </FlexWrapper>
          <Typography type="caption14" marginBottom="s16">
            we have sent you a free course to : {email}
          </Typography>

          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <GreenButton>More Benefits</GreenButton>
          </Link>
        </StyledFlexContainer>
      </Container>
    </SectionWrapper>
  );
};

const StyledFlexContainer = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  animation: gradient 15s ease infinite;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  max-width: 90rem;
  padding: 1.5rem;
  background: linear-gradient(-45deg, #f6b6a386, #e73c7e, #5bd3ff50, #8dffe474);
  background-size: 400% 400%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
