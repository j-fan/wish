import React, { FunctionComponent, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Glow } from "../globalStyles";
import { Screens, useScreen } from "../state/ScreenContext";

const OverlayScreenContainer = styled.div`
  ${Glow};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  margin: 20px;
  & * + * {
    margin-left: 8px;
  }
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
        <Icon
          src="img/icons_tree.png"
          size="medium"
          onClick={() => {
            goToScreen(Screens.VIEW_WISHES);
          }}
        />
      )}

      <Icon
        src="img/icons_about.png"
        size="medium"
        onClick={() => {
          goToScreen(Screens.ABOUT);
        }}
      />

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
