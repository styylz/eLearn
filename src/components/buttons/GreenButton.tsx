import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import { BaseButton } from "./elements/BaseButton";
import { theme } from "styles/theme";

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const GreenButton: React.FC<ButtonProps> = ({ children, onClick }) => (
  <GreenStyledButton onClick={onClick}>{children}</GreenStyledButton>
);

const GreenStyledButton = styled(BaseButton)`
  box-shadow: rgb(57, 150, 31) 0px 2px 4px;
  border: none;
  border-radius: 0.5rem;
  min-width: 12.5rem;
  max-width: 18.75rem;
  padding: 1.31rem 1.31rem;
  background-color: ${theme.colors.green};
  cursor: pointer;
  font-size: 1rem;
  color: ${theme.colors.white};

  @media ${mobile} {
    min-width: 16rem;
  } ;
`;
