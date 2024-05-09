import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  PAYMENT_SUCCESS,
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
  step: 1,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: [], // { email: "",  phone:""}
        isAuthenticated: false, // Signup pe authentication true nhi karna but otp verified pe true karna hai
        step: action.payload.step,
        zealId: null,
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        userData: [],
        isAuthenticated: false,
        error: action.payload.text,
      };
    case VERIFY_OTP_SUCCESS:
    case PAYMENT_SUCCESS:
      localStorage.setItem("userData", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        userData: action.payload.userData || [],
        isAuthenticated: true,
        state: action.payload.step,
        zealId: action.payload.zealId,
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
