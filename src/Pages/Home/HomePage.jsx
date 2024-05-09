import React, { useState } from "react";
import Home from "../MidSection/Home";
import Navbar from "../Landing/Navbar";
import Offers from "../Offers/offers";
import Footer from "../Footer/footer";
import Modal from "../Modal/Modal";

//       <Navbar />
//       <Home />
//       <Offers />
//       <Footer />
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <button onClick={() => setIsModalOpen(true)}>Register Here</button>
    </>
  );
};

export default HomePage;
