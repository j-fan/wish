import React, { FunctionComponent } from "react";
import { GlobalStyle } from "./globalStyles";
import { BabylonScene } from "./babylon/BabylonScene";
import styled from "styled-components";
import { ScreenContextProvider } from "./state/ScreenContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App: FunctionComponent = () => {
  return (
    <ScreenContextProvider>
      <AppContainer>
        <GlobalStyle />
        <BabylonScene />
      </AppContainer>
    </ScreenContextProvider>
  );
};
