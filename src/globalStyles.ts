import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow: hidden;
  }
`;

export { GlobalStyle };
