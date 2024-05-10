import * as api from "../api";
import {
  FETCH_ZEAL_ID_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
} from "./actionType/actionType";

// Action creators
export const signup = (authData, loaderOff) => async (dispatch) => {
  try {
    const response = await api.signUp(authData);
    const { data } = response;

    if (response.status === 201) {
      // Set User Data here for email
      console.log("AuthData.email", authData.email);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { step: 3, userData: { email: authData.email } },
      });
    }
  } catch (error) {
    if (error.response.status === 404) {
      dispatch({ type: SIGNUP_FAILURE, payload: { error: data.message } });
    } else if (error.response.status === 500) {
      dispatch({ type: SIGNUP_FAILURE, payload: { error: data.message } });
    } else if (error.response.status === 409) {
      // user already exists
      dispatch({
        type: SIGNUP_FAILURE,
        payload: {
          error: "Already Registered Phone, Login Instead!",
          step: 1,
        },
      });
    } else {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: { error: error.message },
      });
    }
    console.log(error);
  } finally {
    loaderOff();
  }
};

export const login = (authData, loaderOff) => async (dispatch) => {
  try {
    const response = await api.logIn(authData);
    if (response.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { step: 3, userData: { email: response.data.email } },
      });
    }
  } catch (error) {
    if (error.response.status === 404) {
      // Phone not found
      dispatch({
        type: SIGNUP_STARTED,
        payload: { error: "Phone Not Found, First Register!", step: 2 },
      });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: { error: error.message } });
    }
    console.log(error);
  } finally {
    loaderOff();
  }
};

export const verifyOtp = (data, loaderOff) => async (dispatch) => {
  try {
    const response = await api.verifyOtp(data);
    if (response.status === 200) {
      const { data } = response;
      localStorage.setItem("token", data.token); // set the token
      localStorage.setItem("id", data._id); // set user ID here
      console.log("Verfied Successfully");

      // Fetch Zeal Id here
      try {
        console.log("Fetch Zeal Id starter");
        let responseForZeal = await api.fetchZealId(data.token);
        console.log("Response", responseForZeal);
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
    }
  } catch (error) {
    if (error.response.status === 404) {
      dispatch({
        type: VERIFY_OTP_FAILURE,
        payload: { error: error.message },
      });
    } else if (error.response.status === 400) {
      // Invalid OTP
      dispatch({
        type: VERIFY_OTP_FAILURE,
        payload: { error: "Invalid OTP!" },
      });
    } else {
      dispatch({ type: VERIFY_OTP_FAILURE, payload: { error: error.message } });
    }
    console.log(error);
  } finally {
    loaderOff();
  }
};

export const resendOtp = (data, loaderoff) => async (dispatch) => {
  try {
    const response = await api.resendOtp(data);
    if (response.status === 200) {
      dispatch({ type: RESEND_OTP_SUCCESS });
    }
  } catch (error) {
    if (error.response.status === 403 || error.response.status === 500) {
      dispatch({
        type: VERIFY_OTP_FAILURE,
        payload: { error: error.message },
      });
    } else {
      dispatch({ type: VERIFY_OTP_FAILURE, payload: { error: error.message } });
    }
    console.log(error);
  } finally {
    loaderoff();
  }
};
