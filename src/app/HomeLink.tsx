import Link from 'next/link';
import styles from './info.module.css';

export default function HomeLink() {
  return (
    <div className={`${styles["home-link"]}`}>      <Link href="/">
      <span>Return Home</span>
    </Link>
    </div>
  );
}
