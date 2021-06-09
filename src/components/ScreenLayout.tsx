import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { ThemeColours } from "../globalStyles";

const ANIM_DURATION = "0.5s";

const ScreenLayoutStyle = styled.div<{ $isActive: boolean }>`
  color: ${ThemeColours.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  a {
    color: ${ThemeColours.white};
  }

  ${({ $isActive }) =>
    $isActive
      ? css`
          transition: opacity ${ANIM_DURATION} ease ${ANIM_DURATION},
            transform ${ANIM_DURATION} ease ${ANIM_DURATION};
          opacity: 1;
          transform: translateY(0px);
          pointer-events: all;
        `
      : css`
          transition: opacity ${ANIM_DURATION} ease,
            transform ${ANIM_DURATION} ease;
          opacity: 0;
          transform: translateY(-30px);
          pointer-events: none;
        `};
`;

type ScreenLayoutProps = {
  isActive: boolean;
};

const ScreenLayout: FunctionComponent<ScreenLayoutProps> = ({
  children,
  isActive,
}) => {
  return <ScreenLayoutStyle $isActive={isActive}>{children}</ScreenLayoutStyle>;
};

export { ScreenLayout };
