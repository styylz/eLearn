import {
  Box,
  Container,
  ContentWrapper,
  FlexWrapper,
  GreenButton,
  Image,
  Navbar,
  SectionWrapper,
  Typography,
} from "components";
import { Link } from "gatsby";
import React from "react";
import { useQuery } from "styles/breakpoints";

export const Hero: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <>
      <SectionWrapper style={{ position: "relative", overflow: "hidden" }}>
        <Container>
          <FlexWrapper
            flexDirection={{
              _: "column-reverse",
              ltablet: "row",
              desktop: "row",
            }}
          >
            <FlexWrapper
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems={{ _: "center", ltablet: "left" }}
              maxWidth="34.68rem"
            >
              <Box marginY="s32" textAlign={{ _: "center", ltablet: "left" }}>
                <Typography type="h1">
                  The smart way to Learn anything!
                </Typography>
                <Typography type="body16">
                  As a digital marketing agency, we strive to understand our
                  client’s business goals first then all decisions are made with
                  those.
                </Typography>
              </Box>
              <Link style={{ textDecoration: "none" }} to="/quiz">
                <GreenButton> Start Quiz </GreenButton>
              </Link>
            </FlexWrapper>

            <FlexWrapper textAlign="center">
              {isMobile ? (
                <Image
                  src="manStanding"
                  alt="asd"
                  maxWidth="80%"
                  height="auto"
                />
              ) : (
                <Image src="manStanding" alt="manStanding" maxWidth="100%" />
              )}
            </FlexWrapper>
          </FlexWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};
