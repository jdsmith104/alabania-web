import Link from 'next/link';
import styles from './info.module.css';

export default function HomeLink() {
  return (
    <div className={styles["link-card"]}>
      <Link href="/">
        <span>Go to Home Page</span>
      </Link>
    </div>
  );
}
