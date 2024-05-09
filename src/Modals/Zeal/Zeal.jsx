import React from "react";
import styles from "./Zeal.module.css";

const Zeal = () => {
  let zealId = "NAHIHORA123";
  return (
    <div className={styles.formCont}>
      <p>Your Zeal ID is</p>
      <div className={styles.header}>{zealId}</div>
    </div>
  );
};

export default Zeal;
