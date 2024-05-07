import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Otp from "./Pages/Otp/Otp";
import Home from "./Pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/otp" element={<Otp/>}/>
    </Routes>
  );
};

export default AllRoutes;
