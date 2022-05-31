import { Image } from "components/Image";
import { Typography } from "components/typography/Typography";
import { Box } from "components/wrappers/Box";
import React from "react";
import styled from "styled-components/macro";

interface SimpleCardProps {
  background?: string;
  path?: string;
  imageName?: string;
  title?: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({
  title,
  imageName,
  ...props
}) => (
  <SimpleStyledCard {...props}>
    <Box position="relative">
      <Box position="absolute" top="-3rem">
        <Image src={imageName as string} alt={imageName as string} />
      </Box>
      <Box position="absolute" bottom="-6rem">
        <Typography type="body16" textAlign="center" marginLeft="s16">
          {title}
        </Typography>
      </Box>
    </Box>
  </SimpleStyledCard>
);

const SimpleStyledCard = styled(Box)<SimpleCardProps>`
  border-radius: 1.87rem;
  width: 11.25rem;
  height: 9.5rem;
  padding: 1.875rem 2.5rem;
  background: ${({ background }) => background || ""};
`;
