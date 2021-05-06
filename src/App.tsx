import React, { FunctionComponent } from "react";
import { GlobalStyle } from "./globalStyles";
import { BabylonScene } from "./BabylonScene";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App: FunctionComponent = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <BabylonScene />
    </AppContainer>
  );
};
