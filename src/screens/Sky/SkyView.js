import React from "react";
import { Moon } from "../Moon";
import { Star } from "../Star";
import styles from './Sky.module.scss';

const SkyView = (props) => {
  const {stars, changeSky} = props;

  return (
    <div className={styles._} onClick={(event) => changeSky(event)}>
      <Moon />
      {stars.map((star, index) => (
        <Star star={star} key={'star_' + index} />
      ))}
    </div>
  );
};

export default SkyView;
