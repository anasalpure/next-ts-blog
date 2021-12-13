import Link from "next/link";
import styles from "../styles/Blog.module.css";

type CardProps = {
  title: string;
  description: string;
  clapsCount: number;
  commentsCount: number;
  href: string;
};

const Card = ({
  title,
  description,
  clapsCount,
  commentsCount,
  href,
}: CardProps) => (
  <Link href={href}>
    <a className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        claps &hearts; : {clapsCount} <br />
        comments : {commentsCount}
      </div>
    </a>
  </Link>
);

export default Card;
