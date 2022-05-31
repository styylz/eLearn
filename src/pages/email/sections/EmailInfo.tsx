import React, { useState } from "react";
import {
  Container,
  SectionWrapper,
  Typography,
  GreenButton,
  Box,
  Input,
} from "components";
import { navigate } from "gatsby";
import styled from "styled-components/macro";
import { useAppDispatch } from "state/store";
import { validateEmail } from "utils/validations";

export const EmailInfo: React.FC = () => {
  const [input, setInput] = useState({
    email: "",
  });
  const [error, setError] = useState({
    message: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      email: e.target.value,
    });
  };

  return (
    <>
      <SectionWrapper>
        <Container>
          <StyledFlexContainer>
            <Box marginBottom="s16" maxWidth="35rem" textAlign="center">
              <Typography type="body16">Get started</Typography>
              <Typography type="h1">
                Enter Your e-mail address and get your course
              </Typography>
            </Box>
            <Box>
              <Input
                type="email"
                value={input.email}
                onChange={(e) => handleInput(e)}
                errorMessage={error.message}
              />
              <Box marginTop="s8">
                <GreenButton>Submit</GreenButton>
              </Box>
            </Box>
          </StyledFlexContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

const StyledFlexContainer = styled(Box)`
  background: linear-gradient(-45deg, #f6b6a386, #e73c7e, #5bd3ff50, #8dffe474);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90rem;
  border-radius: 1rem;
  box-shadow: 1rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
