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
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { step: 3, userData: { email: authData.email } },
      }); // 3rd step for OTP
    } else if (response.status === 409) {
      // user already exists
      dispatch({
        type: SIGNUP_FAILURE,
        payload: { error: data.message, step: 1 },
      });
    } else if (response.status === 404) {
      dispatch({ type: SIGNUP_FAILURE, payload: { error: data.message } });
    } else if (response.status === 500) {
      dispatch({ type: SIGNUP_FAILURE, payload: { error: data.message } });
    } else {
      throw new Error("Unexpected server response");
    }
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, payload: { error: error.message } });
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
        payload: { step: 3, userData: authData.email },
      });
    } else if (response.status === 404) {
      // Phone not found
      dispatch({ type: LOGIN_FAILURE, payload: { error: data.message } });
    } else {
      throw new Error("Error While generating OTP");
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: { error: error.message } });
    console.log(error);
  } finally {
    loaderOff();
  }
};

export const verifyOtp = (data, loaderOff) => async (dispatch) => {
  try {
    const response = await api.verifyOtp(data);
    if (response.status === 404) {
      const { message } = response.data;
      dispatch({
        type: VERIFY_OTP_FAILURE,
        payload: { error: message },
      });
    } else if (response.status === 400) {
      // Invalid OTP
      const { message } = response.data;
      dispatch({ type: VERIFY_OTP_FAILURE, payload: { error: message } });
    } else if (response.status === 200) {
      const { data } = response;
      localStorage.setItem("token", data.token); // set the token
      localStorage.setItem("id", data._id); // set user ID here
      // after verification
      dispatch({
        type: VERIFY_OTP_SUCCESS,
        payload: { step: 4 },
      });
    }
  } catch (error) {
    dispatch({ type: VERIFY_OTP_FAILURE, payload: { error: error.message } });
    console.log(error);
  } finally {
    loaderOff();
  }
};

export const resendOtp = (data, loaderoff) => async (dispatch) => {
  try {
    const response = await api.resendOtp(data);
    if (response.status === 403 || response.status === 500) {
      dispatch({
        type: VERIFY_OTP_FAILURE,
        payload: { error: response.data.message },
      });
    } else if (response.status === 200) {
      dispatch({ type: RESEND_OTP_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: VERIFY_OTP_FAILURE, payload: { error: error.message } });
    console.log(error);
  } finally {
    loaderoff();
  }
};
