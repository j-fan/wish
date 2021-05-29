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

  const shouldShowButtons = () =>
    currentScreen === Screens.LANDING_SCREEN ||
    currentScreen === Screens.VIEW_WISHES ||
    currentScreen === Screens.ABOUT;
  const shouldShowBackButton = () =>
    currentScreen === Screens.VIEW_WISHES || currentScreen === Screens.ABOUT;

  return (
    <OverlayScreenContainer>
      {cookies.hasMadeWish && shouldShowButtons() && (
        <Icon
          src="img/icons_tree.png"
          size="large"
          onClick={() => {
            setCurrentScreen(Screens.VIEW_WISHES);
          }}
        />
      )}

      {shouldShowButtons() && (
        <Icon
          src="img/icons_about.png"
          size="large"
          onClick={() => {
            setCurrentScreen(Screens.ABOUT);
          }}
        />
      )}

      {shouldShowBackButton() && (
        <Button
          onClick={() => {
            setCurrentScreen(Screens.LANDING_SCREEN);
          }}
        >
          Back to artwork
        </Button>
      )}
    </OverlayScreenContainer>
  );
};

export { OverlayControls };
