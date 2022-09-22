import styles from '../styles/Home.module.css';

export default function SuccessCard({ title, dsc }) {
  return (
    <div className={styles.successcard}>
      <h3>{title}</h3>
      <p>{dsc}</p>
    </div>
  );
}
