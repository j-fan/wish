import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ScreenLayout } from "./ScreenLayout";

const Red = styled.div`
  width: 600px;
  height: 400px;
  background: #b32828;
`;

const Blue = styled.div`
  width: 600px;
  height: 400px;
  background: #2b6eff;
`;

/**
 *
 * To be deleted, just for testing purposes
 */
const ScreenStackTest: FunctionComponent<{ toggle: boolean }> = ({
  toggle,
}) => {
  return (
    <div>
      <ScreenLayout isActive={toggle}>
        <Red />
      </ScreenLayout>
      <ScreenLayout isActive={!toggle}>
        <Blue />
      </ScreenLayout>
    </div>
  );
};

export { ScreenStackTest };
