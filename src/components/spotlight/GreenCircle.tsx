import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";
import { theme } from "../../styles/theme";
import { mobile, tablet } from "styles/breakpoints";

interface Circle {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  overflow?: string;
}

export const GreenCircle: React.FC<Circle> = ({
  top,
  right,
  left,
  bottom,
  overflow,
  ...props
}) => (
  <StyledGreenSpotlight
    top={top}
    right={right}
    left={left}
    bottom={bottom}
    overflow={overflow}
    {...props}
  />
);

const StyledGreenSpotlight = styled(Box)<Circle>`
  position: ${({ position }) => position || "absolute"};
  top: ${({ top }) => top || ""};
  right: ${({ right }) => right || ""};
  bottom: ${({ bottom }) => bottom || ""};
  left: ${({ left }) => left || ""};
  width: 47vw;
  height: 47vw;
  background: ${theme.colors.lightGreen};
  border-radius: 50%;
  overflow: hidden;
  z-index: -1;

  @media ${mobile} {
    display: none;
  }

  @media ${tablet} {
    display: none;
  }
`;
