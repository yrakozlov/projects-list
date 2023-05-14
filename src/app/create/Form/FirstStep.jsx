"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transliterate as tr, slugify } from "transliteration";

import styles from "./Form.module.scss";
import { setForms } from "@/globalRedux/Features/list/listSlice";

const categories = [
  { label: "NFT", value: "nft" },
  { label: "GameFi", value: "gameFi" },
  { label: "DeFi", value: "deFi" },
  { label: "DAO", value: "dao" },
  { label: "SocialFi", value: "socialFi" },
  { label: "Metaverse", value: "metaverse" },
  { label: "Tools", value: "tools" },
  { label: "Ecosystem", value: "ecosystem" },
  { label: "Others", value: "others" },
];

export default function FirstStep({ changeTab }) {
  const { first } = useSelector(({ list }) => list);
  const dispatch = useDispatch();

  const [name, setName] = useState(first.name);
  const [url, setUrl] = useState(first.url);
  const [choosenCategory, setChoosenCategory] = useState(first.choosenCategory);

  const handleChoose = (value) => {
    setChoosenCategory(value);
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
    setUrl(slugify(value));
  };

  const add = () => {
    const data = {
      name,
      url,
      choosenCategory,
    };
    dispatch(setForms({ data: data, stepName: "first" }));
    changeTab("second");
  };

  return (
    <>
      <div className={styles.input__wrapper}>
        <label className={styles.label} htmlFor="name">
          Project Name (It can be changed later)
        </label>
        <input
          value={name}
          onChange={handleChangeName}
          id="name"
          className={`${styles.input__field} ${styles["value-text"]}`}
          placeholder="Your name"
        />
      </div>

      <div className={styles.input__wrapper}>
        <label className={styles.label} htmlFor="url">
          Project URL (It cannot be changed after creation)
        </label>
        <div className={styles.url}>
          <span className={styles.url__host}>Alphaguilty.io/</span>
          <span className={styles["value-text"]}>{url}</span>
        </div>
      </div>

      <div className={styles.input__wrapper}>
        <span className={styles.label}>
          Project Category (It cannot be changed after creation)
        </span>
        <div className={styles["option-list"]}>
          {categories.map(({ label, value }, idx) => (
            <button
              onClick={() => handleChoose(value)}
              key={idx}
              type="button"
              className={`${styles["option-list__item"]}${
                value === choosenCategory ? ` ${styles.choosen}` : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <button onClick={add} type="button" className={styles.btn}>
        Add Project
      </button>
    </>
  );
}
