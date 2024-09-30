import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  /* div, p, span, h1, h2 {
    color: ${({ theme }) => theme.text_primary};
    padding: 0;
    margin: 0;
  } */
`;
