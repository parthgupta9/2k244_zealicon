import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
} from "../actions/actionType/actionType";

const initialState = {
  loading: false,
  isAuthenticated: false,
  // user:{} - to store user data
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false, // Signup pe authentication true nhi karna but otp verified pe true karna hai
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
