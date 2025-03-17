import React from "react";
import Image from "next/image";
import Frame1Rectangles from "app/SVG/Frame1Rectangles.svg";
import styles from "../FrameLogosContainer/frameLogosContainer.module.scss";

const FrameLogosContainer = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.rectangles}
        src={Frame1Rectangles}
        alt="Sidebar1Rectangles"
      />
    </div>
  );
};

export default FrameLogosContainer;
