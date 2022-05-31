import React from "react";
import { Box, FlexWrapper, Image, Typography } from "components";
import { Benefit } from "constants/constants";
import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";
import { theme } from "styles/theme";

export const CourseInfoCard: React.FC<Omit<Benefit, "id">> = ({
  title,
  description,
  image,
}) => (
  <>
    <StyledCardContainer>
      <FlexWrapper
        alignItems="center"
        justifyContent="center"
        marginBottom="s24"
        borderRadius="r46"
        width="5rem"
        height="5rem"
        backgroundColor="accent"
      >
        <Image src={image} alt={image} />
      </FlexWrapper>
      <Box>
        <Typography type="h3" marginBottom="s16">
          {title}
        </Typography>
        <Typography type="caption14">{description}</Typography>
      </Box>
    </StyledCardContainer>
  </>
);

const StyledCardContainer = styled(FlexWrapper)`
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: ${theme.space.s16};
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  border-radius: 0.4rem;
  width: 15rem;
  height: 16rem;
  padding: ${theme.space.s16};
  background-color: white;

  @media ${tablet} {
    margin-bottom: ${theme.space.s0};
  }
`;
