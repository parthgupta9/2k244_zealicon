import {
  FETCH_ZEAL_ID_FAILURE,
  FETCH_ZEAL_ID_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGOUT,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
  RESEND_OTP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
} from "../actions/actionType/actionType";

const initialState = {
  isAuthenticated: false,
  userData: {},
  error: null,
  zealId: null,
  step: 1,
  isPaymentDone: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_STARTED:
    case LOGIN_STARTED:
      return {
        ...state,
        step: action.payload.step,
        error: action.payload.error,
      };
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
        zealId: null,
        step: 1,
      };

    // Fetch Zeal Id Reducers
    case FETCH_ZEAL_ID_SUCCESS:
      console.log("FETCH_ZEAL_ID_SUCCESS", action.payload);
      return {
        ...state,
        zealId: action.payload.zealId,
        step: action.payload.step,
        isAuthenticated: action.payload.isAuthenticated,
        error: null,
      };
    case FETCH_ZEAL_ID_FAILURE:
      return {
        ...state,
        zealId: null,
        error: action.payload.error,
      };

    // Payment
    case PAYMENT_SUCCESS:
      return {
        ...state,
        isPaymentDone: true,
        error: null,
      };
    case PAYMENT_FAILURE:
      return {
        ...state,
        isPaymentDone: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default authReducer;
