"use client";

import styles from "./ListComponent.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function ListComponent() {
  const { list } = useSelector(({ list }) => list);

  return (
    <main className={styles.main}>
      <div className="container">
        <Link href="/create" className="link create">
          Create new project
        </Link>

        {list.length > 0 ? (
          <table className={styles.table}>
            <thead className={styles.table__head}>
              <tr className={styles.table__row}>
                <th>Name</th>
                <th>URL</th>
                <th>Category</th>
                <th>Goal</th>
                <th>Workers count</th>
                <th>Product launch</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className={styles.table__body}>
              {list.map(
                (
                  {
                    name,
                    url,
                    choosenCategory,
                    goal,
                    workersCount,
                    email,
                    launch,
                  },
                  idx
                ) => (
                  <tr key={idx} className={styles.table__row}>
                    <td>{name}</td>
                    <td>{url}</td>
                    <td>{choosenCategory}</td>
                    <td>{goal}</td>
                    <td>{workersCount}</td>
                    <td>{launch}</td>
                    <td>{email}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <span className={styles.empty}>Empty list</span>
        )}
      </div>
    </main>
  );
}
