import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import styles from "./Otp.module.css";
import submitBtn from "./assets/submit.svg";
import Loader from "../../components/Loader/Loader";
import OtpInput from "../../components/Loader/OtpInput/OtpInput";

const Otp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, error } = useSelector((state) => state.authReducer);
  const email = location.state;
  const [isLoading, setIsLoading] = useState(false);
  const length = 6;
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleSubmit = (e) => {
    const data = {
      email: "",
      otp: otp.join(""),
    };
    // console.log("Otp", data);
    e.preventDefault();
    if (data.otp.trim().length < 6) {
      alert("Enter the Full OTP!");
      return;
    }
    setIsLoading(true);
    dispatch(verifyOtp({ email, otp }));
  };

  const resendOtp = async () => {
    dispatch(resendOtp({ email }));
    if (error == null) {
      alert("We have sent the OTP, check your mail!");
    }
  };

  return (
    <div className={styles.formCont}>
      <h2>Verify your OTP!</h2>
      <div className={styles.formik}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputCont}>
            <label htmlFor="name">Enter the OTP sent to your email.</label>
            <div className={styles.inputwrap}>
              <OtpInput otp={otp} setOtp={setOtp} length={length} />
            </div>
          </div>
          <p className={styles.resendLink}>
            Didn't receive OTP? <span onClick={resendOtp}>Resend OTP</span>
          </p>
          <div className={styles.btnwrap}>
            <button type="submit" disabled={isLoading}>
              <span>
                {isLoading ? (
                  <div className={styles.loaderWrap}>
                    <Loader loaderht="30px" spinnerbox="20px" />
                  </div>
                ) : (
                  <img src={submitBtn} alt="" />
                )}
              </span>
            </button>
            <p>
              Already have an account?<Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
