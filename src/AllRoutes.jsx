import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Modal from "./Pages/Modal/Modal";
import Otp from "./Modals/Otp/Otp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
};

export default AllRoutes;
