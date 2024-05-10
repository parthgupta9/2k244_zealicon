import * as api from "../api";
import {
  LOGOUT,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
} from "./actionType/actionType";
import { fetchZealId } from "./zeal";
const SERVER_URL = "http://localhost:8181";

// Action Creators
export const doPayment = (loaderOff, toast) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const ID = localStorage.getItem("id");
    if (!token || !ID) {
      console.log("Logging out");
      dispatch({ type: LOGOUT });
      return;
    }

    // Get Key - get
    const {
      data: { key },
    } = await api.getPaymentKey();

    const {
      data: { order },
    } = await api.checkout({ jwtToken: token });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Zealicon",
      description: "Purhcase Zealicon Zeal ID",
      image:
        "https://res.cloudinary.com/dlvkf6kgm/image/upload/v1715349430/idCards/k9lu1au32sfscuieehsg.png",
      order_id: order.id,
      handler: async function (response) {
        if (response.status_code === 200) {
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
          try {
            const response = await api.paymentVerification(paymentData, ID);
            if (response.status === 200) {
              toast.success("Payment Successfully Done!");
              dispatch({ type: PAYMENT_SUCCESS, payload: { step: 5 } });
              dispatch(fetchZealId());
            }
          } catch (error) {
            if (error.response.status === 401) {
              toast.error("Contact Developers! Payment Authentication Failed");
              dispatch({ type: PAYMENT_FAILURE, payload: { error: null } });
            } else {
              dispatch({
                type: PAYMENT_FAILURE,
                payload: { error: "SERVER DOWN!" },
              });
            }
          }
        }
      },
      prefill: {
        name: "John Doe",
        email: "Default@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);

    razor.on("payment.failed", function (response) {
      toast.error("Payment Failed!");
      dispatch({
        type: PAYMENT_FAILURE,
        payload: { error: response.error.message },
      });
    });

    razor.open();
  } catch (error) {
    dispatch({ type: PAYMENT_FAILURE, payload: { error: error.message } });
  } finally {
    loaderOff();
  }
};
