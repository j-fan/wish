import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeColours } from "../globalStyles";

const StyledButton = styled.div`
  color: ${ThemeColours.white};
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 10px;
`;

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { Button };
