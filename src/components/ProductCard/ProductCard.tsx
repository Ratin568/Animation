import styles from "./ProductCard.module.css";

type ProductCardProps = {
  title: string;
  price: number;
  description: string;
};

export default function ProductCard({
  title,
  price,
  description,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>

      <p className={styles.price}>
        ${price}
      </p>

      <p className={styles.description}>
        {description}
      </p>

      <button className={styles.button}>
        Buy Now
      </button>
    </div>
  );
}