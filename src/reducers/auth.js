import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  RESEND_OTP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
} from "../actions/actionType/actionType";

const initialState = {
  isAuthenticated: false,
  userData: {},
  error: null,
  step: 2,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData, // { email: "",  phone:""}
        isAuthenticated: false, // Signup pe authentication true nhi karna but otp verified pe true karna hai
        step: action.payload.step,
        error: null,
      };

    case SIGNUP_FAILURE:
      console.log("SINUP FAILEYUE", action.payload);
      return {
        ...state,
        userData: {},
        step: action.payload.step,
        isAuthenticated: false,
        error: action.payload.error,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.error,
      };
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.error,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData,
        isAuthenticated: true,
        step: action.payload.step,
        error: null,
      };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        userData: {},
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
