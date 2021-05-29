import { Vector3 } from "@babylonjs/core";
import React, { FunctionComponent } from "react";
import "@babylonjs/loaders/glTF";
import { ImportedMesh, MeshProperties } from "./ImportedMesh";

const StarModel: FunctionComponent<MeshProperties> = ({
  scaling = new Vector3(40, 40, 40),
  ...props
}) => {
  return (
    <ImportedMesh
      rootUrl="models/"
      sceneFilename="star.glb"
      scaling={scaling}
      {...props}
    />
  );
};

export { StarModel };
