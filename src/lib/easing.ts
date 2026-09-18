export type EasingFunction = (
  value: number
) => number;

export function easeInOutCubic(
  value: number
): number {
  const t = Math.min(
    Math.max(value, 0),
    1
  );

  if (t < 0.5) {
    return (
      4 *
      t *
      t *
      t
    );
  }

  return (
    1 -
    Math.pow(
      -2 * t + 2,
      3
    ) /
      2
  );
}

export function easeOutCubic(
  value: number
): number {
  const t = Math.min(
    Math.max(value, 0),
    1
  );

  return (
    1 -
    Math.pow(1 - t, 3)
  );
}