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
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    navigate("/otp");
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, payload: error.message });
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    navigate("/");
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
    console.log(error);
  }
};

export const verifyOtp = (data, navigate) => async (dispatch) => {
  try {
    const response = await api.verifyOtp(data);
    dispatch({ type: VERIFY_OTP_SUCCESS });
    if (response.status === 200) {
      navigate("/user/otp", { state: data.email });
    }
  } catch (error) {
    dispatch({ type: VERIFY_OTP_FAILURE, payload: error.message });
    setTimeout(() => {
      navigate("/signup");
    }, 5000);
    console.log(error);
  }
};

export const resendOtp = (data, navigate) => async (dispatch) => {};
