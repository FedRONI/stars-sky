import React from "react";
import styles from "./Star.module.scss";

const StarView = (props) => {
  const { star, isView } = props;

  return (
    isView && (
      <div
        className={styles._}
        style={{
          top: star.top,
          left: star.left,
        }}
      ></div>
    )
  );
};

export default StarView;
