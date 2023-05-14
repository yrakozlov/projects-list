"use client";

import { useState } from "react";
import styles from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setNewItem } from "@/globalRedux/Features/list/listSlice";
import Link from "next/link";

const launchArr = [
  { label: "Pre Product", value: "pre" },
  { label: "Post Product", value: "post" },
];

export default function ThirdStep({ changeTab }) {
  const { first, second } = useSelector(({ list }) => list);

  const dispatch = useDispatch();

  const [launch, setLaunch] = useState("");
  const [email, setEmail] = useState("");
  const [workersCount, setWorkersCount] = useState(0);

  const create = () => {
    const data = {
      launch: launch,
      email: email,
      workersCount: workersCount,
    };
    dispatch(setNewItem({ ...first, ...second, ...data }));

    dispatch(resetForm());
  };

  const back = () => {
    changeTab("second");
  };

  const handleLaunchChoose = (value) => {
    setLaunch(value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCount = (e) => {
    setWorkersCount(e.target.value === "" ? 0 : parseInt(e.target.value));
    console.log(typeof workersCount);
  };

  const decrement = () => {
    setWorkersCount((prev) => (prev > 0 ? --prev : 0));
  };

  const increment = () => {
    setWorkersCount((prev) => ++prev);
  };

  return (
    <>
      <p className={styles["head-section__des"]}>Create Project</p>
      <div className={styles.input__wrapper}>
        <label className={styles["head-section__title"]} htmlFor="workersCount">
          How many full-time workers on the project?
        </label>
        <div className={styles.counter__wrapper}>
          <button
            type="button"
            onClick={decrement}
            className={styles.counter__btn}
          >
            –
          </button>
          <input
            value={workersCount}
            onChange={handleChangeCount}
            id="workersCount"
            type="number"
            className={`${styles.input__field} ${styles["value-text"]} ${styles["counter__field"]}`}
          />
          <button
            type="button"
            onClick={increment}
            className={styles.counter__btn}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.input__wrapper}>
        <span className={styles["head-section__title"]}>
          Are you pre or post product launch?
        </span>
        <div className={`${styles.checkbox__wrapper} ${styles["mb-0"]}`}>
          {launchArr.map(({ label, value }, idx) => (
            <label
              key={idx}
              className={`${styles.checkbox} ${styles["value-text"]}`}
            >
              <input
                onChange={() => handleLaunchChoose(value)}
                type="checkbox"
                checked={launch === value}
              />
              <span className={styles.checkmark}></span>
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.input__wrapper}>
        <label className={styles["head-section__title"]} htmlFor="email">
          Contact Email
        </label>
        <input
          value={email}
          onChange={handleChangeEmail}
          id="email"
          placeholder="Your email"
          className={`${styles.input__field} ${styles["value-text"]}`}
        />
      </div>
      <div className={styles.btn__wrapper}>
        <button
          onClick={back}
          type="button"
          className={`${styles.btn} ${styles.back}`}
        >
          Back
        </button>
        <Link href={"/"} onClick={create} className={styles.btn}>
          Create Project
        </Link>
      </div>
    </>
  );
}
