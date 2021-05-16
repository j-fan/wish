import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Glow, ThemeColours } from "../globalStyles";

const StyledButton = styled.div<{ $hasGlow?: boolean }>`
  color: ${ThemeColours.white};
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 10px;
  border: 2px solid ${ThemeColours.white};
  border-radius: 30px;
  align-items: center;

  ${({ $hasGlow }) =>
    $hasGlow &&
    css`
      ${Glow};
    `}

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.1);
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
      <div>{children}</div>
    </StyledButton>
  );
};

export { Button };
