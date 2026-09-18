"use client";

import type { FlameScene } from "@/data/flameStory";

import styles from "./StoryNavigation.module.css";

type StoryNavigationProps = {
  scenes: FlameScene[];
  progress: number;
};

export default function StoryNavigation({
  scenes,
  progress,
}: StoryNavigationProps) {
  const activeIndex =
    Math.max(
      0,
      scenes.findIndex(
        (scene, index) => {
          const next =
            scenes[index + 1];

          return (
            progress >= scene.start &&
            (!next ||
              progress <
                next.start)
          );
        }
      )
    );

  const activeScene =
    scenes[activeIndex];

  return (
    <nav
      className={styles.navigation}
      aria-label="Story navigation"
    >
      <div className={styles.brand}>
        <span>FLAME</span>
        <i />
        <span>2026</span>
      </div>

      <div className={styles.progress}>
        {scenes.map(
          (scene, index) => {
            const local =
              Math.min(
                Math.max(
                  (
                    progress -
                    scene.start
                  ) /
                    (
                      scene.end -
                      scene.start
                    ),
                  0
                ),
                1
              );

            const completed =
              progress >
              scene.end;

            const active =
              index ===
              activeIndex;

            return (
              <div
                key={scene.id}
                className={styles.item}
              >
                <span
                  className={`
                    ${styles.number}
                    ${
                      active
                        ? styles.active
                        : ""
                    }
                    ${
                      completed
                        ? styles.completed
                        : ""
                    }
                  `}
                >
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span
                  className={
                    styles.line
                  }
                >
                  <span
                    className={
                      styles.lineFill
                    }
                    style={{
                      transform: `
                        scaleX(
                          ${
                            completed
                              ? 1
                              : active
                                ? local
                                : 0
                          }
                        )
                      `,
                    }}
                  />
                </span>
              </div>
            );
          }
        )}
      </div>

      <div className={styles.chapter}>
        <span>
          {activeScene?.chapter ??
            "FLAME"}
        </span>

        <strong>
          {String(
            activeIndex + 1
          ).padStart(2, "0")}
          <small>/</small>
          {String(
            scenes.length
          ).padStart(2, "0")}
        </strong>
      </div>
    </nav>
  );
}