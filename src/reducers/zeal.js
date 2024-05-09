import {
  FETCH_ZEAL_ID_FAILURE,
  FETCH_ZEAL_ID_SUCCESS,
} from "../actions/actionType/actionType";

const initialState = {
  zealId: null,
  error: null,
};

const zealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ZEAL_ID_SUCCESS:
      return {
        ...state,
        zealId: action.payload.zealId,
        step: action.payload.step,
        error: null,
      };
    case FETCH_ZEAL_ID_FAILURE:
      return {
        ...state,
        zealId: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default zealReducer;
