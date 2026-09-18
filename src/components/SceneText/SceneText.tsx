import styles from "./SceneText.module.css";

type SceneTextProps = {
  chapter: string;
  title: string;
  description: string;
};

export default function SceneText({
  chapter,
  title,
  description,
}: SceneTextProps) {
  return (
    <div className={styles.container}>
      <span className={styles.chapter}>
        {chapter}
      </span>

      <h1 className={styles.title}>
        {title}
      </h1>

      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}