import * as api from "../api";
import {
  LOGOUT,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
} from "./actionType/actionType";
import { fetchZealId } from "./zeal";

// Action Creators
export const doPayment = (cashfree, loaderOff, toast) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const ID = localStorage.getItem("id"); // USER ID HERE
    if (!token || !ID) {
      console.log("Logging out");
      dispatch({ type: LOGOUT });
      return;
    }

    await dispatch(fetchZealId());

    // get the session ID
    let sessionId = null;
    try {
      const response = await api.checkout({ jwtToken: token });
      if (response.status === 200) {
        sessionId = response.data.session_id;
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        // 401 - Unauthorized Access
        // 403 - User Not Present in the DB
        toast.error("Unauthorized Access");
        toast.error("Logging out...");
        dispatch({ type: LOGOUT });
        return;
      } else if (error.response.status === 405) {
        dispatch({ type: PAYMENT_FAILURE, payload: { error: error.message } });
      } else {
        toast.error("Server Down!");
        dispatch({ type: PAYMENT_FAILURE });
        return;
      }
    }

    let checkoutOptions = {
      paymentSessionId: sessionId,
      redirectTarget: "_modal",
      customer: {
        name: "Zealicon",
        logo: "https://res.cloudinary.com/dlvkf6kgm/image/upload/v1715349430/idCards/k9lu1au32sfscuieehsg.png",
      },
    };

    cashfree.checkout(checkoutOptions).then(async (result) => {
      // Verify Payment
      try {
        const response = await api.paymentVerification(ID);
        // console.log("Response", response);
        if (response.status == 200) {
          toast.success("Payment Successfully Completed");
          dispatch({ type: PAYMENT_SUCCESS });
          dispatch(fetchZealId());
        }
      } catch (error) {
        if (error.response.status === 404) {
          toast.error("Unauthorized Access");
          toast.error("Logging out...");
          dispatch({ type: LOGOUT });
          return;
        } else if (error.response.status === 403) {
          toast.error("Zeal ID already exists");
          dispatch(fetchZealId());
        } else if (error.response.status === 401) {
          toast.error("Payment Failed");
          dispatch({
            type: PAYMENT_FAILURE,
            payload: { error: error.message },
          });
        } else {
          toast.error("Server Down");
          dispatch({
            type: PAYMENT_FAILURE,
            payload: { error: error.message },
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: PAYMENT_FAILURE, payload: { error: error.message } });
  } finally {
    loaderOff();
  }
};
