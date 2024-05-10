import * as api from "../api";
import {
  LOGOUT,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
} from "./actionType/actionType";
import { fetchZealId } from "./zeal";
const SERVER_URL = "http://localhost:8181";

// Action Creators
export const doPayment = (loaderOff) => async (dispatch) => {
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
    console.log(Window);
    const razor = new window.Razorpay(options);
    console.log("Razor", razor);
    razor.on("payment.success", async function (response) {
      console.log("Response",response)
      try {
        let responseForZeal = await api.fetchZealId(token);
        if (responseForZeal.status === 200) {
          dispatch({
            type: FETCH_ZEAL_ID_SUCCESS,
            payload: { zealId: responseForZeal.data.zeal_id, step: 5 },
          });
        }
      } catch (error) {
        if (error.response.status === 401) {
          dispatch({
            type: SIGNUP_FAILURE,
            payload: {
              error: "Unauthorized Access",
              step: 2,
            },
          });
          localStorage.clear();
          return;
        } else if (error.response.status === 404) {
          dispatch({
            type: VERIFY_OTP_SUCCESS,
            payload: { step: 4 }, // payment page - redirect - no zeal id found
          });
        } else {
          dispatch({
            type: VERIFY_OTP_FAILURE,
            payload: {
              error: "Don't Pay, Contact Developers!!!",
            },
          });
        }
      }
      dispatch({ type: PAYMENT_SUCCESS }); // step 5 pe le ja to show the zeal ID
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
