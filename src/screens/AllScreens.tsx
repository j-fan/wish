import React, { FunctionComponent } from "react";
import { BabylonScene } from "../babylon/BabylonScene";
import { Screens, useScreen } from "../state/ScreenContext";
import { About } from "./About";
import { LandingScreen } from "./LandingScreen";
import { Stars } from "./Stars";
import { ViewWishes } from "./ViewWishes";
import { WishInput } from "./WishInput";

const AllScreens: FunctionComponent = () => {
  const { currentScreen } = useScreen();
  return (
    <>
      <BabylonScene showStars={currentScreen === Screens.STARS} />
      <LandingScreen />
      <WishInput />
      <Stars />
      <ViewWishes />
      <About />
    </>
  );
};

export { AllScreens };
