import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Team from "./Pages/Team/Team";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
