export type FlameScene = {
  id: string;
  chapter: string;
  title: string;
  description: string;

  start: number;
  end: number;

  visual:
    | "burger"
    | "heat"
    | "menu"
    | "cta";
};

/*
|--------------------------------------------------------------------------
| FLAME MASTER TIMELINE
|--------------------------------------------------------------------------
|
| The entire experience is normalized to 0 → 1.
|
| Approximate cinematic timing:
|
| 00.00 ───────────── 00.41   BURGER
|                         \
|                          \ transition
|                           \
| 00.47 ───────────── 00.65   HEAT
|                         \
|                          \ transition
|                           \
| 00.78 ───────────── 00.85   MENU
|                         \
|                          \ transition
|                           \
| 00.86 ───────────── 01.00   CTA
|
|--------------------------------------------------------------------------
*/

export const flameStory: FlameScene[] = [
  {
    id: "burger",

    chapter: "01 — THE BURGER",

    title:
      "THE BURGER THAT BITES BACK.",

    description:
      "100% beef. Fresh ingredients. Zero boring bites.",

    start: 0.00,
    end: 0.41,

    visual: "burger",
  },

  {
    id: "heat",

    chapter: "02 — THE HEAT",

    title:
      "TURN UP THE HEAT.",

    description:
      "Crispy edges. Smoky flavor. A little fire never hurt.",

    start: 0.47,
    end: 0.65,

    visual: "heat",
  },

  {
    id: "menu",

    chapter: "03 — THE MENU",

    title:
      "PICK YOUR WEAPON.",

    description:
      "Burgers. Fries. Shakes. Choose your fighter.",

    start: 0.78,
    end: 0.85,

    visual: "menu",
  },

  {
    id: "cta",

    chapter: "04 — COME HUNGRY",

    title:
      "COME HUNGRY. LEAVE HAPPY.",

    description:
      "Your next favorite meal is one click away.",

    start: 0.86,
    end: 1.00,

    visual: "cta",
  },
];