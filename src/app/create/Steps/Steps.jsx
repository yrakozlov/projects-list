"use client";

import styles from "./Steps.module.scss";
import Elipse from "@/assets/icons/create/Elipse";
import Link from "next/link";

const stepsArr = [
  { label: "Start First Project", value: "first" },
  { label: "Project Details", value: "second" },
  { label: "Create Project", value: "third" },
];

export default function Steps({ currentStep }) {
  return (
    <div className={styles.root}>
      <Link href="./" className="link">
        Back
      </Link>
      <div className={styles.steps}>
        {stepsArr.map(({ label, value }, idx) => (
          <div
            key={idx}
            className={`${styles.steps__item}${
              currentStep === value ? ` ${styles["current-step"]}` : ""
            }${
              idx < stepsArr.findIndex(({ value }) => value === currentStep)
                ? ` ${styles["prev-step"]}`
                : ""
            }`}
          >
            <Elipse className={`${styles.elipse}`} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
