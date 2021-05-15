import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Glow, ThemeColours } from "../globalStyles";

const StyledButton = styled.div<{ $hasGlow?: boolean }>`
  color: ${ThemeColours.white};
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${ThemeColours.white};
  border-radius: 30px;
  margin: 6px;
  line-height: 16px;
  ${({ $hasGlow }) =>
    $hasGlow &&
    css`
      ${Glow};
    `}

  &:hover {
    background: ${ThemeColours.white25};
  }

  &:active {
    background: ${ThemeColours.white75};
  }
`;

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  hasGlow?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  hasGlow,
  ...props
}) => {
  return (
    <StyledButton {...props} $hasGlow={hasGlow}>
      {children}
    </StyledButton>
  );
};

export { Button };
