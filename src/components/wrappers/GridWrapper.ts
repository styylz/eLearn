import styled from "styled-components/macro";
import {
  grid,
  gridGap,
  GridGapProps,
  GridProps,
  compose,
  justifyItems,
  JustifyItemsProps,
} from "styled-system";
import { Box } from "./Box";

const gridProps = compose(grid, gridGap, justifyItems);

interface GridStyles extends GridProps, GridGapProps, JustifyItemsProps {}

export const GridWrapper = styled(Box)<GridStyles>`
  display: grid;

  && {
    ${gridProps}
  }
`;
