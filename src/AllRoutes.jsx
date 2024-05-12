import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Modal from "./Pages/Modal/Modal";
import Team from "./Pages/Team/Team";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/team" element={<Team />} />
      <Route path="/" element={<Home />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
};

export default AllRoutes;
