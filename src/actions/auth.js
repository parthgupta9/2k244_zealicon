import * as api from "../api";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
} from "./actionType/actionType";

// Action creators
export const signup = (authData, loaderOff) => async (dispatch) => {
  try {
    // authData is coming in multipart/form data format make sure to decode it then set the email
    const response = await api.signUp(authData);
    const { data } = response;

    if (response.status === 201) {
      // Set User Data here for email
      console.log("AuthData.email", authData.email);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { step: 3, userData: { email: authData.email } },
      }); // 3rd step for OTP
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
          error: "Already Registered, Login Instead!",
          step: 1,
          userData: { email: authData.email },
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
        type: LOGIN_FAILURE,
        payload: { error: "Phone Not Found, First Register!" },
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
      // after verification
      dispatch({
        type: VERIFY_OTP_SUCCESS,
        payload: { step: 4 },
      });
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
