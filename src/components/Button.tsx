import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: blue;
`;

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export { Button };
