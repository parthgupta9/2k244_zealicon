import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import MidSection from "../MidSection/MidSection";
import Navbar from "../Navbar/Navbar";
import Offers from "../Offers/offers";
import Footer from "../Footer/footer";
import Modal from "../Modal/Modal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "unset";
    };
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen && (
        <div className={styles.modalContainer}>
          <div
            className={styles.modalOverlay}
            onClick={() => setIsModalOpen(false)}
          />
          <div className={styles.modalContent}>
            <div className={styles.modalScrollableContent}>
              <Modal setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      )}
      <Navbar setIsModalOpen={setIsModalOpen} />
      <MidSection />
      <Offers />
      <Footer />
    </>
  );
};

export default HomePage;
