import React from "react";
import FrameLogosContainer from "./FrameLogosContainer/FrameLogosContainer";
import TextContainer from "./TextContainer/TextContainer";
import styles from "../frame1/frame1.module.scss";

const Frame1 = () => {
  return (
    <div className={styles.frame}>
      <FrameLogosContainer />
      <TextContainer />
    </div>
  );
};

export default Frame1;
