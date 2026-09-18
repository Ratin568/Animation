"use client";

import type { Scene as SceneData } from "@/animations/scene";

type SceneProps = {
  scene: SceneData;
  progress: number;
  opacity?: number;
  scale?: number;
};

export default function Scene({
  scene,
  progress,
  opacity = 1,
  scale = 1,
}: SceneProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <p>Scene: {scene.id}</p>

      <h2>{scene.content.title}</h2>

      <p>{scene.content.description}</p>

      <p>
        Progress: {progress.toFixed(2)}
      </p>
    </div>
  );
}