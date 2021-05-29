import React, { FunctionComponent } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

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

          <sphere
            name="sphere1"
            diameter={2}
            segments={16}
            position={new Vector3(0, 1, 0)}
          />

          <ground name="ground1" width={6} height={6} subdivisions={2} />
        </Scene>
      </Engine>
    </SceneContainer>
  );
};

export { BabylonScene };
