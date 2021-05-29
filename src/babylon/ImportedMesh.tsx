import { AbstractMesh, SceneLoader, Vector3 } from "@babylonjs/core";
import React, { FunctionComponent, Suspense, useEffect, useState } from "react";
import { useScene } from "react-babylonjs";
import "@babylonjs/loaders/glTF";
import { v4 as uuidv4 } from "uuid";

export type MeshProperties = {
  position?: Vector3;
  scaling?: Vector3;
  rotation?: Vector3;
  enabled?: boolean;
};

type ImportedMeshProps = {
  rootUrl: string;
  sceneFilename?: string;
} & MeshProperties;

const ImportedMesh: FunctionComponent<ImportedMeshProps> = ({
  position = Vector3.Zero(),
  scaling = new Vector3(1, 1, 1),
  rotation = Vector3.Zero(),
  enabled = true,
  rootUrl,
  sceneFilename,
}) => {
  const scene = useScene();
  const [mesh, setMesh] = useState<AbstractMesh>();

  useEffect(() => {
    if (mesh) {
      return;
    }

    SceneLoader.ImportMesh(
      "",
      rootUrl,
      sceneFilename,
      scene,
      (loadedMesh, _particleSystems, _skeletons, animationGroups) => {
        animationGroups?.forEach((animation) => {
          animation.start(true);
        });

        setMesh(loadedMesh[0]);
      }
    );
  }, []);

  useEffect(() => {
    if (!mesh) {
      return;
    }

    mesh.position = position;
    mesh.scaling = scaling;
    mesh.rotation = rotation;
    mesh.setEnabled(enabled);
  }, [position, rotation, scaling, enabled, mesh]);

  return (
    <Suspense fallback={<box name="fallback" scaling={Vector3.Zero()} />}>
      <mesh name={`${sceneFilename}-${uuidv4()}`} fromInstance={mesh} />
    </Suspense>
  );
};

export { ImportedMesh };
