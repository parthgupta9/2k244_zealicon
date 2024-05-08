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
export const signup = (authData, navigate, loaderOff) => async (dispatch) => {
  try {
    console.log("Auth Data from frontend", authData);
    const response = await api.signUp(authData);
    const { data } = response;

    if (response.status === 201) {
      dispatch({ type: SIGNUP_SUCCESS });
      navigate("/otp", { state: authData.email });
    } else if (response.status === 409) {
      // user already exists
      dispatch({ type: SIGNUP_FAILURE, payload: data.message });
      setTimeout(() => {
        navigate("/login");
        return;
      }, 2000);
    } else if (response.status === 404) {
      dispatch({ type: SIGNUP_FAILURE, payload: data.message });
    } else if (response.status === 500) {
      dispatch({ type: SIGNUP_FAILURE, payload: data.message });
    } else {
      throw new Error("Unexpected server response");
    }
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, payload: error.message });
    console.log(error);
  } finally {
    loaderOff();
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const response = await api.logIn(authData);
    if (response.status === 200) {
      dispatch({ type: LOGIN_SUCCESS });
      navigate("/otp", { state: data.email });
    } else if (response.status === 404) {
      // Phone not found
      dispatch({ type: LOGIN_FAILURE, payload: data.message });
    } else {
      throw new Error("Error While generating OTP");
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
    console.log(error);
  } finally {
    // loaderOff()
  }
};

export const verifyOtp = (data, navigate) => async (dispatch) => {
  try {
    const response = await api.verifyOtp(data);
    if (response.status === 404) {
      const { message } = response.data;
      dispatch({
        type: VERIFY_OTP_FAILURE,
        payload: message,
      });
    } else if (response.status === 400) {
      // Invalid OTP
      const { message } = response.data;
      dispatch({ type: VERIFY_OTP_FAILURE, payload: message });
    } else if (response.status === 200) {
      dispatch({ type: VERIFY_OTP_SUCCESS });
      // set the user data here
      navigate("/");
    }
  } catch (error) {
    dispatch({ type: VERIFY_OTP_FAILURE, payload: error.message });
    console.log(error);
  } finally {
    // loaderOff();
  }
};

export const resendOtp = (data) => async (dispatch) => {
  try {
    const response = await api.resendOtp(data);
    if (response.status === 403 || response.status === 500) {
      dispatch({ type: VERIFY_OTP_FAILURE, payload: response.data.message });
    } else if (response.status === 200) {
      dispatch({ type: RESEND_OTP_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: VERIFY_OTP_FAILURE, payload: error.message });
    console.log(error);
  }
};
