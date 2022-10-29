import React, {Fragment} from "react";
import styles from './Moon.module.scss';
import {ReactComponent as IconMoon} from "../../icons/moon.svg"

const MoonView = (props) => {
  const {} = props;
  return (
  <div className={styles._}>
    <IconMoon fill="#f7ca26" height={72} width={72} />
  </div>
  );
};

export default MoonView;
