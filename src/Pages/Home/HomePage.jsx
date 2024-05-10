import React, { useState } from "react";
import MidSection from "../MidSection/MidSection";
import Navbar from "../Navbar/Navbar";
import Offers from "../Offers/offers";
import Footer from "../Footer/footer";
import Modal from "../Modal/Modal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <Navbar setIsModalOpen={setIsModalOpen} />
      <MidSection />
      <Offers />
      <Footer />
    </>
  );
};

export default HomePage;
