import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          Nexa<span>AI</span>
        </div>

        <div className={styles.navbarLinks}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <button className={styles.navbarButton}>
          Get Started
        </button>
      </div>
    </nav>
  );
}