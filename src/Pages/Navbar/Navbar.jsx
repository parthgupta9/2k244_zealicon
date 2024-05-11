import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/Frame.png";
import bg from "../../assets/BG 1.png";
import bg_phone from "../../assets/BG_phone.png";
import styles from "./navbar.module.css";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchZealId } from "../../actions/zeal";
import { LOGIN_STARTED, LOGOUT } from "../../actions/actionType/actionType";
import { toast } from "react-toastify";
import Hamburger from "hamburger-react";
import { gsap } from "gsap";

const Navbar = ({ setIsModalOpen }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isOpen, setOpen] = useState(false);

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowSize, false);
  }, []);

  const dispatch = useDispatch();
  const { zealId, isAuthenticated } = useSelector((state) => state.allReducers);

  useEffect(() => {
    const fetchId = async () => {
      dispatch(fetchZealId());
    };
    fetchId();
  }, []);

  function NavMenu() {
    return (
      <>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavLinksCont}>
            <li>About</li>
            <li>Events</li>
            <li>Team</li>
            <li>Download App</li>
          </ul>
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
        </nav>
      </>
    );
  }

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
          {windowSize.width > 900 ? (
            <ul className={`${styles.ul}`}>
              <li>About</li>
              <li>Events</li>
              <li>Team</li>
              <li style={{marginRight: "3rem"}}>Download App</li>
              {zealId && isAuthenticated ? (
                <Button
                  type={"small"}
                  text={"LOGOUT"}
                  action={() => {
                    toast.success("Logout Successfully!");
                    return dispatch({ type: LOGOUT });
                  }}
                  size={3}
                />
              ) : (
                <Button
                  type={"small"}
                  text={"LOGIN"}
                  action={() => setIsModalOpen(true)}
                  size={3}
                />
              )}
            </ul>
          ) : (
            <>
              <div className={styles.hamIcon}>
                <Hamburger rounded toggled={isOpen} toggle={setOpen} />
              </div>
              {isOpen && <NavMenu />}
            </>
          )}
        </div>
      </div>

      <div className={`${styles.register}`}>
        <p className={`${styles.date}`}>20th May-22th May</p>
        <div className={`${styles.btnBox}`}>
          <Button type={"small"} text={"Download App"} action={() => {}} />
          {zealId ? (
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
