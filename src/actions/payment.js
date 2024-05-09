import * as api from "../api";
import {
  LOGOUT,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
} from "./actionType/actionType";
import { fetchZealId } from "./zeal";
const SERVER_URL = "http://localhost:8181";

// Action Creators
export const payment = (loaderOff) => async (dispatch) => {
  try {
    // Get Key - get
    const {
      data: { key },
    } = await api.getPaymentKey();

    // Place Order - Post
    const token = localStorage.getItem("token");
    const ID = localStorage.getItem("id");
    if (!token || !ID) {
      dispatch({ type: LOGOUT });
      throw new Error("Verification Failed! Login again");
    }

    const {
      data: { order },
    } = await api.checkout({ jwtToken: token });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Zealicon",
      description: "Purhcase Zealicon Zeal ID",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: `${SERVER_URL}/api/payment/payment-verification/${ID}`,
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

    razor.on("payment.success", function (response) {
      dispatch({ type: PAYMENT_SUCCESS });
    });
    razor.on("payment.error", function (error) {
      dispatch({ type: PAYMENT_FAILURE, payload: { error: error.message } });
    });

    razor.open();
    await dispatch(fetchZealId());
  } catch (error) {
    dispatch({ type: PAYMENT_FAILURE, payload: { error: error.message } });
  } finally {
    loaderOff();
  }
};
