import React, { FunctionComponent } from "react";
import { Button } from "../components/Button";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.STARS;

const Stars: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <h1>stars screen</h1>
      <Button
        onClick={() => {
          setCurrentScreen(Screens.VIEW_WISHES);
        }}
      >
        Continue
      </Button>
    </ScreenLayout>
  );
};

export { Stars };
