import React, { FunctionComponent } from "react";
import { About } from "./About";
import { LandingScreen } from "./LandingScreen";
import { ViewWishes } from "./ViewWishes";
import { WishInput } from "./WishInput";

const AllScreens: FunctionComponent = () => {
  return (
    <>
      <LandingScreen />
      <WishInput />
      <ViewWishes />
      <About />
    </>
  );
};

export { AllScreens };
