import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBadge}>
          ✨ Powered by AI
        </div>

        <h1 className={styles.heroTitle}>
          Build Something
          <span> Amazing.</span>
        </h1>

        <p className={styles.heroDescription}>
          Create powerful websites faster with the help
          of artificial intelligence.
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.heroPrimary}>
            Get Started
          </button>

          <button className={styles.heroSecondary}>
            Watch Demo
          </button>
        </div>

        <div className={styles.heroPreview}>
          <div className={styles.previewBar}>
            <span />
            <span />
            <span />
          </div>

          <div className={styles.previewContent}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}