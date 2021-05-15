import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeColours } from "../globalStyles";

const StyledButton = styled.div`
  color: ${ThemeColours.white};
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${ThemeColours.white};
  border-radius: 30px;
  margin: 6px;
  line-height: 16px;

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
};

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { Button };
