import React, { FunctionComponent } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { StarModels } from "./StarModels";
import { BackgroundModel } from "./BackgroundModel";

const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

type BabylonSceneProps = {
  showStars: boolean;
};

const BabylonScene: FunctionComponent<BabylonSceneProps> = ({ showStars }) => {
  const [ref, { height, width }] = useMeasure({
    polyfill: ResizeObserver,
  });

  return (
    <SceneContainer ref={ref}>
      <Engine antialias canvasId="babylonJS" height={height} width={width}>
        <Scene clearColor={new Color4(0, 0, 0, 1)}>
          <freeCamera
            name="camera1"
            position={new Vector3(0, 0, -10)}
            setTarget={[Vector3.Zero()]}
          />

          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

          <BackgroundModel />
          {StarModels({ numStars: 6, showStars })}

          <defaultRenderingPipeline
            hdr
            bloomEnabled
            bloomKernel={32}
            bloomScale={1}
            bloomWeight={1}
            bloomThreshold={0.7}
          />
        </Scene>
      </Engine>
    </SceneContainer>
  );
};

export { BabylonScene };
