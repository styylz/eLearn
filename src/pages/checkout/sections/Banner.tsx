import { FlexWrapper, Image, Typography } from "components";
import React from "react";

export const Banner: React.FC = () => (
  <>
    <FlexWrapper alignItems="center" justifyContent="center" height="4.5rem">
      <Image src="logo" alt="logo" width="5rem" />
    </FlexWrapper>
    <FlexWrapper
      alignItems="center"
      justifyContent="center"
      height="3.5rem"
      backgroundColor="accent"
    >
      <FlexWrapper position="sticky" marginRight="s16" paddingTop="s8">
        <Image src="localOffer" alt="logo" width="1.25rem" height="1.25rem" />
      </FlexWrapper>
      <Typography type="body16">
        40% discount only valid for 00:15:49
      </Typography>
    </FlexWrapper>
  </>
);
