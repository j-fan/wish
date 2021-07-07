import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { HideScrollBar, ThemeColours } from "../globalStyles";
import { Icon } from "./Icon";

const WishContainer = styled.div`
  height: 100%;
  min-width: 260px;
  max-width: 260px;
  overflow: hidden;
  border: 2px solid ${ThemeColours.white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 40px 20px;
  }
`;

const TextContainer = styled.div`
  font-size: 28px;
  word-break: break-word;
  overflow-x: hidden;
  overflow-y: scroll;
  ${HideScrollBar}
`;

const WishTag: FunctionComponent = ({ children }) => {
  return (
    <WishContainer>
      <Icon src="img/star.png" size="extraLarge" />
      <TextContainer>{children}</TextContainer>
    </WishContainer>
  );
};

export { WishTag };
