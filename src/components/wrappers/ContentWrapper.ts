import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import { Box } from './Box';

export const ContentWrapper = styled(Box)`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 58rem;

    @media ${mobile} {
		padding: 3rem 0;
	}

`