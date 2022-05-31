import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "state/store";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { theme } from "styles/theme";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0
}
body {
    overflow: hidden auto;
	background-color: #F5FAFF;
}
html {
    font-family: ${theme.fontFamily.primary};
}
`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
