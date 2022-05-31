import { Image, FlexWrapper, Typography, Box } from "components";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Product } from "../../state/types";

interface ProductCardProps extends Omit<Product, "category" | "isFree"> {
  onClick?: (event: { id: string; title: string; price: number }) => void;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  avatar,
  name,
  price,
  background,
  onClick,
}) => (
  <SimpleStyledCard>
    <CardContent
      onClick={onClick ? () => onClick({ id, title, price }) : undefined}
    >
      <Image src={background} alt={background} maxWidth="100%" height="auto" />
      <Box position="absolute" maxWidth="6.25rem" right="1rem" bottom="6.5rem">
        <Image src={avatar} alt="rhayahn" maxWidth="100%" />
      </Box>
      <FlexWrapper flexDirection="column" paddingY="s32" paddingX="s16">
        <Typography type="h5" fontSize="fs16">
          {title}
        </Typography>
        <Typography type="caption14">
          <Typography type="span"> Teacher - </Typography>
          {name}
        </Typography>
        <Typography type="h3" fontSize="fs18">
          ${price}
        </Typography>
      </FlexWrapper>
    </CardContent>
  </SimpleStyledCard>
);

const SimpleStyledCard = styled(FlexWrapper)`
  border-radius: 1.87rem;
  max-width: 20rem;
  min-height: 15rem;
  padding: 1.875rem 2.5rem;
`;
const CardContent = styled(FlexWrapper)`
  position: relative;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 15%) 0px 14px 28px, rgb(0 0 0 / 15%) 0px 10px 10px;
  border-radius: 0.4rem;
`;
