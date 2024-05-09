import React, { useState } from "react";
import Home from "../MidSection/Home";
import Navbar from "../Landing/Navbar";
import Offers from "../Offers/offers";
import Footer from "../Footer/footer";
import Modal from "../Modal/Modal";
{
  /* <button onClick={() => setIsModalOpen(true)}>Register Here</button> */
}
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <Navbar />
      <Home />
      <Offers />
      <Footer />
    </>
  );
};

export default HomePage;
