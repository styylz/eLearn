import { Typography } from "components/typography/Typography";
import React from "react";
import { Image } from "components/Image";
import { FlexWrapper } from "../wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import Checkout from "../../pages/checkout/index";
import { Link } from "gatsby";

export const Navbar: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  return (
    <FlexWrapper
      alignItems="center"
      flexDirection={{ lmobile: "row", desktop: "row" }}
      justifyContent="space-between"
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      height="4.5rem"
      padding={{ _: "s2424", desktop: "s16111" }}
    >
      <FlexWrapper alignItems="center">
        <Image src="logo" maxHeight="4rem" alt="logo" />
        <Typography type="body16"> ELearn</Typography>
      </FlexWrapper>

      <FlexWrapper
        justifyContent="space-between"
        flexDirection={{ lmobile: "row", desktop: "row" }}
        alignItems="center"
      >
        {isMobile || isTablet ? (
          <Image src="burger" maxHeight="6rem" alt="burger" />
        ) : (
          <>
            <StyledLink href="#">Home</StyledLink>
            <StyledLink href="#courses">Courses</StyledLink>

            <Link
              to="/checkout"
              style={{
                textDecoration: "none",
                color: `${theme.colors.primary}`,
              }}
            >
              Checkout
            </Link>
          </>
        )}
      </FlexWrapper>
    </FlexWrapper>
  );
};

const StyledLink = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: ${theme.colors.primary};
`;
