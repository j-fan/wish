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
        <Red>
          <input type="text" value="I am a string" />
          <p>some text some text some text</p>
          <button type="button">press here</button>
        </Red>
      </ScreenLayout>
      <ScreenLayout isActive={!toggle}>
        <Blue>
          <input type="text" value="I am a string" />
          <p>some text some text some text</p>
          <button type="button">press here</button>
        </Blue>
      </ScreenLayout>
    </div>
  );
};

export { ScreenStackTest };
