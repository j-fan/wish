import { Vector3 } from "@babylonjs/core";
import React, { FunctionComponent } from "react";
import "@babylonjs/loaders/glTF";
import { ImportedMesh, MeshProperties } from "./ImportedMesh";

const StarColourMeshes = {
  purple: "star_purple.glb",
  teal: "star_teal.glb",
  yellow: "star_yellow.glb",
};

type StarModelProps = {
  colour: keyof typeof StarColourMeshes;
} & MeshProperties;

const StarModel: FunctionComponent<StarModelProps> = ({
  colour,
  scaling = new Vector3(40, 40, 40),
  ...props
}) => {
  return (
    <ImportedMesh
      rootUrl="models/"
      sceneFilename={StarColourMeshes[colour]}
      scaling={scaling}
      {...props}
    />
  );
};

export { StarModel };
