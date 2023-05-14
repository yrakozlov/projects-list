"use client";

import styles from "./Create.module.scss";

import { useState } from "react";
import Steps from "./Steps";
import Form from "./Form";

export const metadata = {
  title: "Create",
  description: "Create project",
};

export default function Page() {
  const [currentStep, setCurrentStep] = useState("first");

  const handleChangeStep = (step) => {
    setCurrentStep(step);
  };
  return (
    <div className={styles.root}>
      <Steps currentStep={currentStep} />
      <Form currentStep={currentStep} handleChangeStep={handleChangeStep} />
    </div>
  );
}
