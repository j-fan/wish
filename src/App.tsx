import React, { FunctionComponent, useRef } from "react";
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
  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <CookiesProvider>
      <ScreenContextProvider>
        <AppContainer>
          <GlobalStyle />
          <audio ref={audioRef} loop>
            <source src="sound/crowander_let_is_last.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <AllScreens onEnterArtwork={playMusic} />
          <OverlayControls />
        </AppContainer>
      </ScreenContextProvider>
    </CookiesProvider>
  );
};
