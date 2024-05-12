import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchZealId } from "../../actions/zeal";
import { LOGOUT } from "../../actions/actionType/actionType";

import { toast } from "react-toastify";
import Hamburger from "hamburger-react";

import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = ({ setIsModalOpen, windowSize }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  const dispatch = useDispatch();
  const { zealId, isAuthenticated } = useSelector((state) => state.allReducers);

  useEffect(() => {
    const fetchId = async () => {
      dispatch(fetchZealId());
    };
    fetchId();
  }, []);

  function PhoneNavMenu() {
    return (
      <>
        <div aria-hidden className={styles.hideOverlay}></div>
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
                setOpen(false);
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
    <header className={`${styles.header}`}>
      <img
        className="logo"
        src="./images/zealicon_logo.svg"
        alt="zealicon logo"
      ></img>
      
      { windowSize?.width && windowSize.width> 900  ? (
        /* Desktop Navigation -------------------------------------------- */

        <nav className={styles.desktopNav}>
          <ul>
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
        </nav>
      ) : (
        <>
          {/* Phone Navigation -------------------------------------------- */}

          <div className={styles.hamIcon}>
            <Hamburger rounded toggled={isOpen} toggle={setOpen} />
          </div>
          {isOpen && <PhoneNavMenu />}
        </>
      )}
    </header>
  );
};

export default Header;
