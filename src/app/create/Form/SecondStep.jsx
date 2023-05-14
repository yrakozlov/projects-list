"use client";

import { useRef, useState } from "react";
import styles from "./Form.module.scss";
import { setForms } from "@/globalRedux/Features/list/listSlice";
import { useDispatch, useSelector } from "react-redux";

const paramsArr = [
  { label: "Grow My Community", value: "grow" },
  { label: "Activate Existing Members", value: "activate" },
  { label: "Understand My Members", value: "understand" },
  { label: "Other", value: "Other" },
];
export default function SecondStep({ changeTab }) {
  const { second } = useSelector(({ list }) => list);

  const dispatch = useDispatch();
  const [goal, setGoal] = useState(second.goal);

  const continueFunc = () => {
    dispatch(setForms({ data: { goal: goal }, stepName: "second" }));
    changeTab("third");
  };

  const back = () => {
    changeTab("first");
  };

  const handleChecked = (value) => {
    setGoal(value);
  };

  return (
    <>
      <div className={styles.checkbox__wrapper}>
        {paramsArr.map(({ label, value }, idx) => (
          <label
            key={idx}
            className={`${styles.checkbox} ${styles["value-text"]}`}
          >
            <input
              onChange={() => handleChecked(value)}
              type="checkbox"
              checked={goal === value}
            />
            <span className={styles.checkmark}></span>
            {label}
          </label>
        ))}
      </div>
      <div className={styles.btn__wrapper}>
        <button
          onClick={back}
          type="button"
          className={`${styles.btn} ${styles.back}`}
        >
          Back
        </button>
        <button onClick={continueFunc} type="button" className={styles.btn}>
          Add Project
        </button>
      </div>
    </>
  );
}
