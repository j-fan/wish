import React, { FunctionComponent } from "react";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  background-image: url("img/wish_background.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const Background: FunctionComponent = () => {
  return <BackgroundStyle />;
};

export { Background };
