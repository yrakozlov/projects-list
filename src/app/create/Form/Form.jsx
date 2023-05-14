"use client";

import { useSelector, useDispatch } from "react-redux";
import { setNewItem } from "@/globalRedux/Features/list/listSlice";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

import { useState } from "react";

import styles from "./Form.module.scss";
import ThirdStep from "./ThirdStep";

const fromsComponents = {
  first: {
    components: (changeTab) => <FirstStep changeTab={changeTab} />,
    title: "Add New Project",
    des: "To Create Quest you need firstly create Project",
  },
  second: {
    components: (changeTab) => <SecondStep changeTab={changeTab} />,
    title: "What is your main goal with AlphaQuest?",
    des: "Project Details",
  },
  third: {
    components: (changeTab) => <ThirdStep changeTab={changeTab} />,
    title: "",
    des: "",
  },
};

export default function Form({ currentStep, handleChangeStep }) {
  const { list } = useSelector(({ list }) => list);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles["head-section"]}>
        <p className={styles["head-section__des"]}>
          {fromsComponents[currentStep].des}
        </p>
        <h3 className={styles["head-section__title"]}>
          {fromsComponents[currentStep].title}
        </h3>
      </div>

      <form action="/" method="post" className={styles.form}>
        {fromsComponents[currentStep].components(handleChangeStep)}
      </form>
    </div>
  );
}
