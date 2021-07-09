import React, { FunctionComponent } from "react";
import { BabylonScene } from "../babylon/BabylonScene";
import { Screens, useScreen } from "../state/ScreenContext";
import { About } from "./About";
import { LandingScreen } from "./LandingScreen";
import { Stars } from "./Stars";
import { ViewWishes } from "./ViewWishes";
import { WishInput } from "./WishInput";

interface AllScreensProps {
  onEnterArtwork?: () => void;
}

const AllScreens: FunctionComponent<AllScreensProps> = ({ onEnterArtwork }) => {
  const { currentScreen } = useScreen();
  return (
    <>
      <BabylonScene showStars={currentScreen === Screens.STARS} />
      <LandingScreen onEnterArtwork={onEnterArtwork} />
      <WishInput />
      <Stars />
      <ViewWishes />
      <About />
    </>
  );
};

export { AllScreens };
