import React from "react";
import styles from "./Zeal.module.css";
import { useSelector } from "react-redux";

const Zeal = () => {
  const { zealId } = useSelector((state) => state.zealReducer);
  return (
    <div className={styles.formCont}>
      <p>Your Zeal ID is</p>
      <div className={styles.header}>{zealId}</div>
    </div>
  );
};

export default Zeal;
