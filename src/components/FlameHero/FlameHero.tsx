import styles from "./FlameHero.module.css";

export default function FlameHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.brand}>
        FLAME
      </div>

      <div className={styles.center}>
        <span className={styles.label}>
          EST. 2026
        </span>

        <h1>
          THE BURGER
          <br />
          THAT BITES
          <br />
          BACK.
        </h1>
      </div>

      <div className={styles.bottom}>
        <span>SCROLL TO EXPLORE</span>

        <span className={styles.arrow}>
          ↓
        </span>
      </div>
    </section>
  );
}