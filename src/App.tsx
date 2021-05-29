import React, { FunctionComponent } from "react";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import { ScreenContextProvider } from "./state/ScreenContext";
import { AllScreens } from "./screens/AllScreens";
import { CookiesProvider } from "react-cookie";
import { OverlayControls } from "./screens/OverlayControls";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App: FunctionComponent = () => {
  return (
    <CookiesProvider>
      <ScreenContextProvider>
        <AppContainer>
          <GlobalStyle />
          <AllScreens />
          <OverlayControls />
        </AppContainer>
      </ScreenContextProvider>
    </CookiesProvider>
  );
};
