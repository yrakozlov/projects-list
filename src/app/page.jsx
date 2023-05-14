import Link from "next/link";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className={styles.links}>
          <Link href="/list" className="link">
            List
          </Link>
          <Link href="/create" className="link">
            Create Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
