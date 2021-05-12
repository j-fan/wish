import React, { FunctionComponent } from "react";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.VIEW_WISHES;

const ViewWishes: FunctionComponent = () => {
  const { currentScreen } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <h1>View wishes</h1>
    </ScreenLayout>
  );
};

export { ViewWishes };
