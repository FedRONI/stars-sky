import React, { Fragment } from "react";
import styles from "./Star.module.scss";
import { IStarViewProps } from "./useStar";

const StarView = (props: IStarViewProps) => {
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