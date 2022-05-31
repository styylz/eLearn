import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";

export const GreenSpotlight = () => <StyledGreenSpotlight />;

export const StyledGreenSpotlight = styled(Box)`
  position: absolute;
  width: 50vw;
  height: 50vw;
  bottom: 0;
  left: 0;
  border: 1px solid black;
  filter: blur(250px);
  background: linear-gradient(
    66.49deg,
    rgba(245, 227, 125, 0.24) 15.16%,
    rgba(27, 186, 84, 0.24) 64.71%,
    rgba(137, 221, 251, 0.24) 88.45%,
    rgba(86, 196, 245, 0.24) 149.16%,
    rgba(215, 70, 217, 0.24) 149.17%
  );
  border-radius: 50%;
  transform: matrix(-0.56, -0.83, -0.83, 0.56, 0, 0);
`;
