import React, { FunctionComponent } from "react";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.ABOUT;

const About: FunctionComponent = () => {
  const { currentScreen } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <h1>About screen</h1>
    </ScreenLayout>
  );
};

export { About };
