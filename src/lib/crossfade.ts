import type { Scene } from "@/animations/scene";

export type CrossfadeRange = {
  start: number;
  end: number;
};

export function getCrossfadeRange(
  outgoingScene: Scene,
  incomingScene: Scene
): CrossfadeRange {
  const start =
    outgoingScene.range.end -
    outgoingScene.transition.exit *
      (outgoingScene.range.end -
        outgoingScene.range.start);

  const end =
    incomingScene.range.start +
    incomingScene.transition.enter *
      (incomingScene.range.end -
        incomingScene.range.start);

  return {
    start,
    end,
  };
}