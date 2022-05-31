import { Box, FlexWrapper, Image, Typography } from "components";
import React from "react";
import styled from "styled-components/macro";
import { Review } from "constants/constants";

export const PersonCard: React.FC<Omit<Review, "id">> = ({
  name,
  age,
  description,
  image,
  location,
}) => (
  <StyledPersonCard>
    <FlexWrapper flexDirection="column" justifyContent="space-between">
      <FlexWrapper height="2.9rem" flexDirection="column">
        <Typography type="h5">
          {name}, {age}
        </Typography>
        <Typography type="caption14"> {location}</Typography>
      </FlexWrapper>
      <Box height="3.4rem">⭐⭐⭐⭐⭐</Box>
      <Box height="10.56rem" width="1.25rem">
        <Image src={image} alt={image} />
      </Box>
      <Typography type="body16">{description}</Typography>
    </FlexWrapper>
  </StyledPersonCard>
);

const StyledPersonCard = styled(Box)`
  margin: 1rem 1rem 3rem 1rem;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: 1rem;
  min-height: 40.93rem;
  padding: 1rem;
`;
