import styles from '../styles/Home.module.css';

export default function InactiveCard({ title, dsc }) {
  return (
    <div className={styles.inactivecard}>
      <h3>{title}</h3>
      <p>{dsc}</p>
    </div>
  );
}
