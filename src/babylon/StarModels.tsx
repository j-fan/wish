import { Vector3 } from "@babylonjs/core";
import React, { ReactElement } from "react";
import { StarColourMeshes, StarColours, StarModel } from "./StarModel";

type StarModelProps = {
  numStars: number;
  showStars: boolean;
};

const StarModels = ({
  numStars,
  showStars,
}: StarModelProps): ReactElement[] => {
  return Array.from(Array(numStars)).map((_value, index) => {
    const startPos = Math.random();
    return (
      <StarModel
        key={index}
        position={new Vector3(startPos * -5, 5, 0)}
        colour={Object.keys(StarColourMeshes)[index % 3] as StarColours}
        enabled={showStars}
      />
    );
  });
};

export { StarModels };
