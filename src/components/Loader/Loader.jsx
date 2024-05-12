import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ loaderht = "50px", spinnerbox = "20px" }) => {
  return (
    <div className={styles.loader} style={{ height: loaderht }}>
      <div
        className={styles.spinner}
        style={{ width: spinnerbox, height: spinnerbox }}
      ></div>
    </div>
  );
};

export default Loader;
