import React from "react";
import styles from "../TextContainer/TextContainer.module.scss";

const TextContainer = () => {
  return (
    <div className={styles.textContainer}>
      <span className={styles.text1}>
        by signing up, you agree to our{"  "}
      </span>
      <span className={styles.text2}>terms of service & privacy policies.</span>
    </div>
  );
};

export default TextContainer;
