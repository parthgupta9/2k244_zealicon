import React, { useEffect, useState } from "react";
import styles from "./Pay.module.css";
import payBtn from "./assets/payBtn.svg";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { doPayment } from "../../actions/payment";
import { toast } from "react-toastify";
import { load } from "@cashfreepayments/cashfree-js";

const Pay = () => {
  let cashfree;
  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };

  insitialzeSDK();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const loaderOff = () => setIsLoading(false);

  const handleSubmit = () => {
    setIsLoading(true);
    dispatch(doPayment(cashfree, loaderOff, toast));
  };

  return (
    <div className={styles.formCont}>
      <div className={styles.header}>
        Purchase your Zeal Tag
        <br />
        ₹200
      </div>
      <p>
        Entry to ZEALICON 2024 is through a Valid Zeal ID <br />
        You need to pay ₹200 to get the entry
      </p>
      <div className={styles.btnwrap}>
        <button onClick={handleSubmit} disabled={isLoading}>
          <span>
            {isLoading ? (
              <div className={styles.loaderWrap}>
                <Loader loaderht="30px" spinnerbox="20px" />
              </div>
            ) : (
              <img src={payBtn} alt="" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pay;
