import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Otp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, error } = useSelector((state) => state.authReducer);
  const email = location.state;
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.trim() < 6) {
      // 6 dig
      // Formik Validation will be used here
      return;
    }
    dispatch(verifyOtp({ email, otp }));
  };

  const resendOtp = async () => {
    dispatch(resendOtp({ email }));
    if (error == null) {
      alert("We have sent the OTP, check your mail!");
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter OTP"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={resendOtp}>Resend OTP</button>
    </div>
  );
};

export default Otp;
