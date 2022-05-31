import {
  Container,
  FlexWrapper,
  SectionWrapper,
  Typography,
  Box,
} from "components";
import { ABOUTPLANS } from "constants/constants";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const PlanHeader: React.FC = () => (
  <SectionWrapper>
    <Container>
      <FlexWrapper
        justifyContent="space-between"
        flexDirection={{ _: "row", desktop: "row" }}
        alignItems="center"
        margin="auto"
        maxWidth="36.75rem"
      >
        <StaticImage
          src="../../../assets/images/cardsOfPeople.png"
          alt="image"
        />
        <FlexWrapper
          flexDirection={{ _: "column" }}
          marginLeft="s24"
          width="100%"
          paddingY={{ _: "s0", desktop: "s8" }}
        >
          {ABOUTPLANS.map(({ id, title, description }) => (
            <Box key={id}>
              <Typography type="h4">{title}</Typography>
              <Typography type="caption14" marginY="s8">
                {description}
              </Typography>
            </Box>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </SectionWrapper>
);
