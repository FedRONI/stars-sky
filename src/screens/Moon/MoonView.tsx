import React, { Fragment } from "react";
import styles from "./Moon.module.scss";
import { ReactComponent as IconMoon } from "../../icons/nights_stay_FILL1_wght400_GRAD0_opsz48.svg";
import { IMoonProps } from "./useMoon";

const MoonView = (props: IMoonProps) => {
  const {} = props;
  
  return (
  <div className={styles._}>
    <IconMoon fill="#ffeb3b" height={72} width={72} />
  </div>
  );
};

export default MoonView;