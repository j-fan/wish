import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Button } from "../components/Button";
import { ScreenLayout } from "../components/ScreenLayout";
import { device, Glow } from "../globalStyles";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.STARS;
const ANIM_DURATION = "0.5s";
const BUTTON_DELAY = "3s";

const AlignBottom = styled.div`
  ${Glow};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;

  @media ${device.mobileL} {
    margin-bottom: 40px;
  }
`;

const StyledButton = styled(Button)<{ $isActive: boolean }>`
  ${Glow};
  margin: 20px;

  ${({ $isActive }) =>
    $isActive
      ? css`
          transition: opacity ${ANIM_DURATION} ease ${BUTTON_DELAY};
          opacity: 1;
          pointer-events: all;
        `
      : css`
          transition: opacity ${ANIM_DURATION} ease;
          opacity: 0;
          pointer-events: none;
        `};

  @media ${device.mobileL} {
    margin: 40px;
  }
`;

const Stars: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen, screenContent } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <StyledButton
        onClick={() => {
          setCurrentScreen(Screens.VIEW_WISHES);
        }}
        $isActive={currentScreen === THIS_SCREEN}
      >
        Continue
      </StyledButton>
      <AlignBottom>
        <h1>{screenContent.text}</h1>
      </AlignBottom>
    </ScreenLayout>
  );
};

export { Stars };
