import {
  Box,
  Container,
  FlexWrapper,
  GreenButton,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import { PROS } from "constants/constants";
import React from "react";
import { PaymentCard } from "../elements";
import { PlanProps } from "typings/types";

export const Plan: React.FC<PlanProps> = ({
  handlePlanClick,
  selectedPlan,
  plans,
}) => (
  <SectionWrapper>
    <Container>
      <FlexWrapper justifyContent="center" margin="auto" minHeight="35.5rem">
        <FlexWrapper
          justifyContent="center"
          flexDirection={{ _: "column-reverse", desktop: "row" }}
        >
          <Box marginRight={{ _: "s0", desktop: "s24" }}>
            {plans?.map(
              ({ id, title, price, oldPrice, currPrice, description }) => (
                <PaymentCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  oldPrice={oldPrice}
                  currPrice={currPrice}
                  description={description}
                  selected={selectedPlan}
                  onClick={handlePlanClick}
                />
              )
            )}
            <Box marginY="s24">
              <FlexWrapper justifyContent="center" minWidth="0">
                <GreenButton>Get your plan</GreenButton>
              </FlexWrapper>
            </Box>
            <Box textAlign="center">
              <Image src="payments" alt="paymentsMethods" margin="auto" />
              <Typography type="caption12">
                By choosing a payment method you agree to the T&Cs and Privacy
                Policy
              </Typography>
            </Box>
          </Box>

          <FlexWrapper
            flexDirection="column"
            maxWidth="21rem"
            margin={{ _: "auto", desktop: "s0" }}
          >
            <Typography marginBottom="s24" type="h2">
              Benefits you get
            </Typography>
            {PROS.map(({ id, title, description }) => (
              <FlexWrapper marginBottom="s16" key={id}>
                <Image src="greenCheckmark" alt="greenCheckark" />
                <Box marginLeft="s8">
                  <Typography type="h5">{title}</Typography>
                  <Typography type="caption12">{description}</Typography>
                </Box>
              </FlexWrapper>
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </SectionWrapper>
);
