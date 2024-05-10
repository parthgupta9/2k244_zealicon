import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
};

export default App;
