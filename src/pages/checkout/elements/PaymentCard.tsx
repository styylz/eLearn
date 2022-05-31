import { FlexWrapper, Image, Typography } from "components";
import React from "react";
import { Plan } from "state/types";
import styled from "styled-components/macro";
import { PlanState } from "typings/types";

interface PaymentProps extends Omit<Plan, "selected"> {
  onClick: (event: string) => void;
  selected: PlanState;
}

interface Styles {
  checked: boolean;
}

export const PaymentCard: React.FC<PaymentProps> = ({
  id,
  title,
  price,
  oldPrice,
  currPrice,
  description,
  selected,
  onClick,
}) => {
  const isSelectedCard = selected.id === id;
  return (
    <>
      <FlexWrapper
        alignItems="center"
        justifyContent="center"
        marginBottom="s8"
        maxWidth="30rem"
        minWidth="0"
        onClick={() => onClick(id)}
      >
        <StyledPlanCardContainer checked={isSelectedCard}>
          <FlexWrapper flexDirection="column" justifyContent="space-between">
            <Typography type="h5">{title}</Typography>
            <FlexWrapper>
              <Typography type="h2" marginRight="s16">
                {price} <Typography type="span"> / month </Typography>{" "}
              </Typography>
            </FlexWrapper>
            <Typography type="caption14">
              <Typography
                type="span"
                textDecoration="line-through"
                marginRight="s8"
              >
                {oldPrice || ""}
              </Typography>
              <Typography type="span" fontWeight="fw700" marginRight="s4">
                {currPrice || ""}
              </Typography>
              {description}
            </Typography>
          </FlexWrapper>
          {isSelectedCard ? (
            <Image src="filledGreenCheck" alt="filledGreenCheck" />
          ) : (
            <Image src="greenCheckmark" alt="greenCheckmark" />
          )}
        </StyledPlanCardContainer>
      </FlexWrapper>
    </>
  );
};

const StyledPlanCardContainer = styled(FlexWrapper)<Styles>`
  box-shadow: ${({ checked }) =>
    checked
      ? `rgb(0 255 4 / 32%) 0px 0px 0px 2px, rgb(50 139 18 / 45%) 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset`
      : ""};

  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  width: 87%;
  max-height: 9.3rem;
  padding: 1rem;
  background-color: white;
`;
