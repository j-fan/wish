import { createGlobalStyle } from "styled-components";

const fontFamily = "font-family: 'Cormorant', serif;";

const ThemeColours = {
  white: "#FFFFFF",
  white25: "rgba(255, 255, 255, 0.25)",
  white50: "rgba(255, 255, 255, 0.5)",
  white75: "rgba(255, 255, 255, 0.75)",
  black: "#000000",
  black25: "rgba(0, 0, 0, 0.25)",
  black50: "rgba(0, 0, 0, 0.5)",
  black75: "rgba(0, 0, 0, 0.75)",
};

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${fontFamily}
    background: ${ThemeColours.black}
  }

  button {
    font-family: 'Cormorant', serif;
  }
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

const Glow =
  "filter: drop-shadow(0px 0px 1px #FFF) drop-shadow(0px 0px 5px #FFF)";

export { GlobalStyle, ThemeColours, fontFamily, device, Glow };
