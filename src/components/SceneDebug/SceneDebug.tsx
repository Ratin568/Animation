"use client";

import useScrollProgress from "@/hooks/useScrollProgress";

import {
  getActiveScene,
  getSceneProgress,
} from "@/lib/scene";

import { flameStory } from "@/data/flameStory";

export default function SceneDebug() {
  const progress =
    useScrollProgress();

  const currentScene =
    getActiveScene(
      progress,
      flameStory
    );

  const sceneProgress =
    currentScene
      ? getSceneProgress(
          progress,
          currentScene
        )
      : 0;

  return (
    <div className="scroll-debug">
      <p>
        Global:{" "}
        {progress.toFixed(2)}
      </p>

      <p>
        Current:{" "}
        {currentScene?.id ?? "none"}
      </p>

      <p>
        Local:{" "}
        {sceneProgress.toFixed(2)}
      </p>
    </div>
  );
}