import styled from "styled-components/macro";
import { flexbox, FlexboxProps } from "styled-system";
import { Theme } from "styles/theme";
import { Box } from "./Box";

interface Styles<T> extends FlexboxProps<T> {}

export const FlexWrapper = styled(Box)<Styles<Theme>>`
  display: flex;
  && {
    ${flexbox}
  }
`;
