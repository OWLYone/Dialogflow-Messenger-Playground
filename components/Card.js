import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Card({ title, dsc, url, external }) {
  return (
    <div className={styles.card}>
      {external ? (
        <Link href={external} target="_blank">
          <a>
            <h3>{title} &rarr;</h3>
            <p>{dsc}</p>
          </a>
        </Link>
      ) : (
        <Link href={`/${url}`}>
          <a>
            <h3>{title} &rarr;</h3>
            <p>{dsc}</p>
          </a>
        </Link>
      )}
    </div>
  );
}
