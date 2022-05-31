import {
    Box,
    Container,
    FlexWrapper,
    GreenButton,
    Image,
    SectionWrapper,
    Typography,
  } from "components";
  import React from "react";
  import { useQuery } from "styles/breakpoints";

  export const JoinUs: React.FC = () => {
    const { isMobile } = useQuery();
    return (
      <SectionWrapper>
        <Container>
          <FlexWrapper>
            <FlexWrapper
              flexDirection={{
                _: "column-reverse",
                ltablet: "row-reverse",
                desktop: "row-reverse",
              }}
            >
              <FlexWrapper
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems={{ _: "center", ltablet: "left" }}
                marginLeft={{ _: "s0", ltablet: "s16" }}
                maxWidth="34.68rem"
              >
                <Box marginY="s32" textAlign={{ _: "center", ltablet: "left" }}>
                  <Typography type="h2" marginBottom="s16">
                    Do you want to join any Course
                  </Typography>
                  <Typography type="body16" marginBottom="s16">
                    As a digital marketing agency, we strive to understand our
                    client’s business goals first then all decisions are made with
                    those. As a digital first then all decisions are made with
                    those.
                  </Typography>
                  <Typography type="body16">
                    As a digital marketing agency, we strive to understand our
                    client’s business goals first then all decisions are made with
                    those.
                  </Typography>
                </Box>
                <GreenButton> Join Us </GreenButton>
              </FlexWrapper>

              <FlexWrapper textAlign="center">
                <Box>
                  {isMobile ? (
                    <Image
                      src="twoPeopleStanding"
                      alt="asd"
                      maxWidth="100%"
                      height="auto"
                    />
                  ) : (
                    <Image
                      src="twoPeopleStanding"
                      alt="asd"
                      minWidth="80%"
                      maxWidth="100%"
                    />
                  )}
                </Box>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </Container>
      </SectionWrapper>
    );
  };
