import React, { useState, useEffect } from "react";
import logo from "../../assets/Frame.png";
import bg from "../../assets/BG 1.png";
import bg_phone from "../../assets/BG_phone.png";
import styles from "./navbar.module.css";
import Button from "../../components/Button/Button";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  return (
    <>
      <div className={`${styles.container}`}>
        <img
          className={`${styles.image}`}
          src={windowSize.width <= 900 ? bg_phone : bg}
          alt="Your Image"
        />
        <div className={`${styles.list}`}>
          <img src={logo}></img>
          <ul className={`${styles.ul}`}>
            <li>About</li>
            <li>Events</li>
            <li>Team</li>
            <li>Download App</li>
            <Button type={"small"} text={"LOGIN"} action={() => {}} />
          </ul>
        </div>
      </div>

      <div className={`${styles.register}`}>
        <p className={`${styles.date}`}>20th May-22th May</p>
        <div className={`${styles.btnBox}`}>
          <Button type={"small"} text={"Download App"} action={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
