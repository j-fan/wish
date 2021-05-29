import { Vector3 } from "@babylonjs/core";
import React, { FunctionComponent, useState, useEffect } from "react";
import { ImportedMesh, MeshProperties } from "./ImportedMesh";
import { animate } from "popmotion";

const StarColourMeshes = {
  purple: "star_purple.glb",
  teal: "star_teal.glb",
  yellow: "star_yellow.glb",
};

export type StarColours = keyof typeof StarColourMeshes;
const MAX_X_RANGE = 8;

type StarModelProps = {
  colour: StarColours;
} & MeshProperties;

const StarModel: FunctionComponent<StarModelProps> = ({
  colour,
  scaling = new Vector3(40, 40, 40),
  position = Vector3.Zero(),
  ...props
}) => {
  const [offset, setOffset] = useState(0);
  const [offsetRandom, setOffsetRandom] = useState(Math.random());

  useEffect(() => {
    const randomDelay = Math.random() * 5000;

    animate({
      from: 0,
      to: MAX_X_RANGE,
      duration: 5000,
      repeat: Infinity,
      elapsed: randomDelay,
      onUpdate: (newValue) => {
        setOffset(newValue);
      },
      onRepeat: () => {
        setOffsetRandom(Math.random());
      },
    });
  }, []);

  return (
    <ImportedMesh
      rootUrl="models/"
      sceneFilename={StarColourMeshes[colour]}
      scaling={scaling}
      position={
        new Vector3(
          position.x + offset + (offsetRandom - 0.5) * MAX_X_RANGE,
          position.y - offset * 2,
          position.z
        )
      }
      {...props}
    />
  );
};

export { StarModel, StarColourMeshes };
