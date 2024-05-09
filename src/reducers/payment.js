import {
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
} from "../actions/actionType/actionType";

const initialState = {
  isPaymentDone: false,
  paymentData: null,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_SUCCESS:
      return {
        ...state,
        paymentData: action.payload.paymentData,
        isPaymentDone: true,
        error: null,
      };
    case PAYMENT_FAILURE:
      return {
        ...state,
        paymentData: null,
        isPaymentDone: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default paymentReducer;
