import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.authReducer);
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim < 10) {
      // formik validation here needed
      // toast.error("Not allowed")
      return;
    }
    dispatch(login({ phone }));
  };

  if (isAuthenticated) {
    const { from } = location.state || { from: { pathname: "/" } };
    navigate(from);
    return null;
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={phone}
          onChange={handleChange}
          placeholder="Enter Phone Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
