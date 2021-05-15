import React, { FunctionComponent, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Screens, useScreen } from "../state/ScreenContext";

const OverlayScreenContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const OverlayControls: FunctionComponent = () => {
  const [cookies] = useCookies();
  const { currentScreen, setCurrentScreen } = useScreen();
  const [previousScreen, setPreviousScreen] = useState(currentScreen);

  const isMainInteractionFlow = () =>
    currentScreen === Screens.LANDING_SCREEN ||
    currentScreen === Screens.WISH_INPUT;

  const goToScreen = (destination: Screens) => {
    if (isMainInteractionFlow()) {
      setPreviousScreen(currentScreen);
    }
    setCurrentScreen(destination);
  };

  return (
    <OverlayScreenContainer>
      {cookies.hasMadeWish && (
        <Button
          onClick={() => {
            goToScreen(Screens.VIEW_WISHES);
          }}
        >
          View wishes
        </Button>
      )}

      <Button
        onClick={() => {
          goToScreen(Screens.ABOUT);
        }}
      >
        About this artwork
      </Button>

      {!isMainInteractionFlow() && (
        <Button
          onClick={() => {
            setCurrentScreen(previousScreen);
          }}
        >
          Back to artwork
        </Button>
      )}
    </OverlayScreenContainer>
  );
};

export { OverlayControls };
