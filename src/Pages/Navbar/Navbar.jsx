import React, { useState, useEffect } from "react";
import logo from "../../assets/Frame.png";
import bg from "../../assets/BG 1.png";
import bg_phone from "../../assets/BG_phone.png";
import styles from "./navbar.module.css";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchZealId } from "../../actions/zeal";
import { LOGIN_STARTED, LOGOUT } from "../../actions/actionType/actionType";
import { toast } from "react-toastify";

const Navbar = ({ setIsModalOpen }) => {
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

  const dispatch = useDispatch();
  const { zealId, isAuthenticated } = useSelector((state) => state.allReducers);
  useEffect(() => {
    const fetchId = async () => {
      dispatch(fetchZealId());
    };
    fetchId();
  }, []);
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
            {zealId && isAuthenticated ? (
              <Button
                type={"small"}
                text={"LOGOUT"}
                action={() => {
                  toast.success("Logout Successfully!");
                  return dispatch({ type: LOGOUT });
                }}
              />
            ) : (
              <Button
                type={"small"}
                text={"LOGIN"}
                action={() => setIsModalOpen(true)}
              />
            )}
          </ul>
        </div>
      </div>

      <div className={`${styles.register}`}>
        <p className={`${styles.date}`}>20th May-22th May</p>
        <div className={`${styles.btnBox}`}>
          <Button type={"small"} text={"Download App"} action={() => {}} />
          {zealId? (
            <Button
              type={"small"}
              text={"Your Zeal ID"}
              action={() => setIsModalOpen(true)}
            />
          ) : (
            <Button
              type={"small"}
              text={"Register Here"}
              action={() => setIsModalOpen(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
