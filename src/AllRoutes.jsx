import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Modal from "./Pages/Modal/Modal";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
};

export default AllRoutes;
