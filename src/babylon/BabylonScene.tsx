import React, { FunctionComponent } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { StarModel } from "./StarModel";

const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

const BabylonScene: FunctionComponent = () => {
  const [ref, { height, width }] = useMeasure({
    polyfill: ResizeObserver,
  });

  return (
    <SceneContainer ref={ref}>
      <Engine antialias canvasId="babylonJS" height={height} width={width}>
        <Scene clearColor={new Color4(0, 0, 0, 0)}>
          <freeCamera
            name="camera1"
            position={new Vector3(0, 5, -10)}
            setTarget={[Vector3.Zero()]}
          />

          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

          <StarModel position={new Vector3(0, 1, 0)} colour="teal" />
          <StarModel position={new Vector3(1, 0, 0)} colour="purple" />
          <StarModel position={new Vector3(0, -1, 0)} colour="yellow" />
          <StarModel position={new Vector3(-1, 0, 0)} colour="purple" />
        </Scene>
      </Engine>
    </SceneContainer>
  );
};

export { BabylonScene };
