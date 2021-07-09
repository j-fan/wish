import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { ScreenLayout } from "../components/ScreenLayout";
import { device, Glow } from "../globalStyles";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.LANDING_SCREEN;

const Logo = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${Glow};

  @media ${device.mobileL} {
    width: 50%;
  }
`;

const StarDoor = styled.img`
  max-width: 25%;
  object-fit: contain;
`;

const LogoImg = styled.img`
  max-width: 75%;
  object-fit: contain;
  margin-top: 20%;
  margin-left: -12%;
`;

interface LandingScreenProps {
  onEnterArtwork?: () => void;
}

const LandingScreen: FunctionComponent<LandingScreenProps> = ({
  onEnterArtwork,
}) => {
  const { currentScreen, setCurrentScreen } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <Logo>
        <StarDoor src="img/star_arch.png" />
        <LogoImg src="img/wish_logo.png" />
      </Logo>
      <Button
        hasGlow
        onClick={() => {
          setCurrentScreen(Screens.WISH_INPUT);
          onEnterArtwork?.();
        }}
      >
        Enter artwork
      </Button>
    </ScreenLayout>
  );
};

export { LandingScreen };
