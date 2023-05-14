"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./SideBar.module.scss";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Create",
    path: "/create",
  },
];

const SideBar = () => {
  const currentPathname = usePathname();

  return (
    <div className={styles.root}>
      <div className="container">
        <nav className={styles.link__wrapper}>
          {links.map(({ label, path }, idx) => (
            <Link
              key={idx}
              className={`${styles.link}${
                path === currentPathname ? ` ${styles.active}` : ""
              }`}
              href={path}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
