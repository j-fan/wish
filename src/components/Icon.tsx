import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

const IconStyle = styled.div<{ src: string; size: string }>`
  ${({ src, size }) => css`
    width: ${size};
    height: ${size};
    background-image: url(${src});
    background-size: cover;
    box-sizing: border-box;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1.1);
    }
  `}
`;

const IconSize = {
  small: "30px",
  medium: "40px",
  large: "48px",
  extraLarge: "80px",
};

interface IconProps {
  size: keyof typeof IconSize;
  src: string;
  onClick?: () => void;
}

const Icon: FunctionComponent<IconProps> = ({ size, ...props }) => {
  return <IconStyle size={IconSize[size]} {...props} />;
};

export { Icon };
