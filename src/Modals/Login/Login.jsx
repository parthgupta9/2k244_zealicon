import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import styles from "./Login.module.css";
import nextBtn from "./assets/nextBtn.svg";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.authReducer);
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const loaderOff = () => setIsLoading(false);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (phone.trim < 10) {
      return;
    }
    dispatch(login({ phone }, loaderOff));
  };

  return (
    <div className={styles.formCont}>
      <h2>Welcome Back</h2>
      <div className={styles.formik}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputCont}>
            <label htmlFor="phone">Enter your mobile number</label>
            <div className={styles.inputWrap}>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className={styles.btnwrap}>
            <button type="submit" disabled={isLoading}>
              <span>
                {isLoading ? (
                  <div className={styles.loaderWrap}>
                    <Loader loaderht="30px" spinnerbox="20px" />
                  </div>
                ) : (
                  <img src={nextBtn} alt="" />
                )}
              </span>
            </button>
            <p>
              Create an account! <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
