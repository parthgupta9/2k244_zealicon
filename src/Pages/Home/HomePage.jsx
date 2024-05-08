import React from "react";
import Home from "../MidSection/Home";
import Navbar from "../Landing/Navbar";
import Offers from "../Offers/offers";
import Footer from "../Footer/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Offers />
      <Footer />
    </>
  );
};

export default HomePage;
