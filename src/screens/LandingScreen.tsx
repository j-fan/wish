import React, { FunctionComponent } from "react";
import { Button } from "../components/Button";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.LANDING_SCREEN;

const LandingScreen: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <Button
        onClick={() => {
          setCurrentScreen(Screens.WISH_INPUT);
        }}
      >
        Enter artwork
      </Button>
    </ScreenLayout>
  );
};

export { LandingScreen };
