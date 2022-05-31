import React, { InputHTMLAttributes } from "react";
import { Box, Typography } from "components";
import { Theme } from "styles/theme";
import { Styles } from "components/wrappers/Box";
import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Styles<Theme> & {
    label?: string;
    errorMessage?: string;
  };

export const Input: React.FC<InputProps> = ({
  min,
  max,
  placeholder,
  type,
  onChange,
  label,
  value,
  errorMessage,
  ...props
}) => (
  <Box>
    <label htmlFor="input">
      <Typography type="body16">{label}</Typography>
    </label>
    <StyledBox
      as="input"
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
      type={type}
      onChange={onChange}
      {...props}
    />
    {errorMessage && (
      <label htmlFor="input">
        <Typography type="body16">{errorMessage}</Typography>
      </label>
    )}
  </Box>
);

const StyledBox = styled(Box)<Styles<Theme>>`
  width: 100%;
  height: 4rem;
  padding-left: 2rem;
  border-radius: 1.5rem;
  border: 0rem;
`;
