import { Scene, Vector3 } from "@babylonjs/core";
import React, { FunctionComponent, Suspense } from "react";
import { ILoadedModel, Model } from "react-babylonjs";
import "@babylonjs/loaders/glTF";
import { v4 as uuidv4 } from "uuid";

type StarModelProps = {
  scene: Scene;
  position?: Vector3;
  scaleToDimension?: number;
  rotation?: Vector3;
};

const StarModel: FunctionComponent<StarModelProps> = ({
  position = Vector3.Zero(),
  scaleToDimension = 1,
  ...props
}) => {
  const onLoaded = (model: ILoadedModel) => {
    model.animationGroups?.forEach((animation) => {
      animation.start(true);
    });
  };

  return (
    <Suspense fallback={<box name="fallback" scaling={Vector3.Zero()} />}>
      <Model
        name={`star-model-${uuidv4()}`}
        rootUrl="models/"
        sceneFilename="star.glb"
        position={position}
        scaleToDimension={scaleToDimension}
        onModelLoaded={onLoaded}
        {...props}
      />
    </Suspense>
  );
};

export { StarModel };
