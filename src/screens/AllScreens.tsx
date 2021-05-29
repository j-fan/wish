import React, { FunctionComponent } from "react";
import { About } from "./About";
import { LandingScreen } from "./LandingScreen";
import { Stars } from "./Stars";
import { ViewWishes } from "./ViewWishes";
import { WishInput } from "./WishInput";

const AllScreens: FunctionComponent = () => {
  return (
    <>
      <LandingScreen />
      <WishInput />
      <Stars />
      <ViewWishes />
      <About />
    </>
  );
};

export { AllScreens };
