import { css } from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import { Theme } from "styles/theme";
import { TextType } from "./Typography";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${theme.typography.h1.fonstSize};
        line-height: ${theme.typography.h1.lineHeight};
        @media ${mobile} {
          font-size: ${theme.typography.h1.fontSizeMobile};
          line-height: ${theme.typography.h1.lineHeightMobile};
        }
      `;
    case "h2":
      return css`
        font-weight: ${theme.typography.h2.fontWeight};
        font-size: ${theme.typography.h2.fonstSize};
        line-height: ${theme.typography.h2.lineHeight};
        @media ${mobile} {
          font-size: ${theme.typography.h2.fontSizeMobile};
          line-height: ${theme.typography.h2.lineHeightMobile};
        }
      `;
    case "h3":
      return css`
        font-weight: ${theme.typography.h3.fontWeight};
        font-size: ${theme.typography.h3.fonstSize};
        line-height: ${theme.typography.h3.lineHeight};
        letter-spacing: ${theme.typography.h3.letterSpacing};
        @media ${mobile} {
          font-size: ${theme.typography.h3.fontSizeMobile};
          line-height: ${theme.typography.h3.lineHeightMobile};
        }
      `;
    case "h4":
      return css`
        font-weight: ${theme.typography.h4.fontWeight};
        font-size: ${theme.typography.h4.fonstSize};
        line-height: ${theme.typography.h4.lineHeight};
        @media ${mobile} {
          font-size: ${theme.typography.h4.fontSizeMobile};
          line-height: ${theme.typography.h4.lineHeightMobile};
        }
      `;
    case "h5":
      return css`
        font-weight: ${theme.typography.h5.fontWeight};
        font-size: ${theme.typography.h5.fonstSize};
        line-height: ${theme.typography.h5.lineHeight};
        @media ${mobile} {
          font-size: ${theme.typography.h5.fontSizeMobile};
          line-height: ${theme.typography.h5.lineHeightMobile};
        }
      `;
    case "h6":
      return css`
        font-weight: ${theme.typography.h6.fontWeight};
        font-size: ${theme.typography.h6.fonstSize};
        line-height: ${theme.typography.h6.lineHeight};
        @media ${mobile} {
          font-size: ${theme.typography.h6.fontSizeMobile};
          line-height: ${theme.typography.h6.lineHeightMobile};
        }
      `;
    case "body16":
      return css`
        font-weight: ${theme.typography.body16.fontWeight};
        font-size: ${theme.typography.body16.fonstSize};
        line-height: ${theme.typography.body16.lineHeight};

        @media ${mobile} {
          line-height: ${theme.typography.body16.lineHeightMobile};
        }
      `;
    case "caption14":
      return css`
        font-weight: ${theme.typography.caption14.fontWeight};
        font-size: ${theme.typography.caption14.fonstSize};
        line-height: ${theme.typography.caption14.lineHeight};
        letter-spacing: ${theme.typography.caption14.letterSpacing};
      `;
    case "caption12":
      return css`
        font-weight: ${theme.typography.caption12.fontWeight};
        font-size: ${theme.typography.caption12.fonstSize};
        line-height: ${theme.typography.caption12.lineHeight};
      `;
    case "span":
      return css`
        font-weight: ${theme.typography.span.fontWeight};
        font-size: ${theme.typography.span.fonstSize};
        line-height: ${theme.typography.span.lineHeight};
        letter-spacing: ${theme.typography.span.letterSpacing};
      `;
  }
};
