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
  userData: [],
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: [],
        isAuthenticated: false, // Signup pe authentication true nhi karna but otp verified pe true karna hai
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        userData: [],
        isAuthenticated: false,
        error: action.payload,
      };
    case VERIFY_OTP_SUCCESS:
      localStorage.setItem("userData", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        userData: action.payload || [],
        isAuthenticated: true,
        error: null,
      };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        userData: [],
        isAuthenticated: false,
        error: null,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        userData: [],
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
