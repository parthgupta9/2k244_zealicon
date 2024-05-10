import React, { useEffect, useState } from "react";
import styles from "./Pay.module.css";
import payBtn from "./assets/payBtn.svg";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { doPayment} from "../../actions/payment";

const Pay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const loaderOff = () => setIsLoading(false);

  const handleSubmit = () => {
    setIsLoading(true);
    dispatch(doPayment(loaderOff))
  };

  return (
    <div className={styles.formCont}>
      <div className={styles.header}>
        Purchase your Zeal Tag
        <br />
        ₹300
      </div>
      <p>
        Entry to ZEALICON 2023 is through a Valid Zeal ID <br />
        You need to pay ₹300 to get the entry
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
