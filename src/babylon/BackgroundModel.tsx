import { Vector3 } from "@babylonjs/core";
import React, { FunctionComponent } from "react";

const IMAGE_URL = "img/wish_background.jpg";
const SCALE_FACTOR = 1.67;

const BackgroundModel: FunctionComponent = () => {
  return (
    <plane
      name="backgroundPlane"
      scaling={new Vector3(9 * SCALE_FACTOR, 6 * SCALE_FACTOR, 1)}
    >
      <standardMaterial name="backgroundMaterial" disableLighting>
        <texture url={IMAGE_URL} assignTo={"emissiveTexture"} />
      </standardMaterial>
    </plane>
  );
};

export { BackgroundModel };
