import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import { Colors, Theme } from "styles/theme";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  position,
  compose,
  backgroundColor,
  BackgroundColorProps,
  PositionProps,
} from "styled-system";

const containerProps = compose(position, backgroundColor, space, color);

interface ConStyles<T>
  extends PositionProps<T>,
    BackgroundColorProps<T>,
    SpaceProps<T>,
    ColorProps<T> {}

export const Container = styled.div<ConStyles<Theme>>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 72rem;

  @media ${mobile} {
    max-width: 100%;
  }

  && {
    ${containerProps}
  }
`;
