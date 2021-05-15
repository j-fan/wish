import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Cormorant', serif;
    overflow: hidden;
  }

  button {
    font-family: 'Cormorant', serif;
  }
`;

const ThemeColours = {
  white: "#FFFFFF",
};

export { GlobalStyle, ThemeColours };
