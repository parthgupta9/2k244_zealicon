import { combineReducers } from "redux";
import authReducer from "./auth";
import paymentReducer from "./payment";
import zealReducer from "./zeal";
export default combineReducers({
  authReducer,
  paymentReducer,
  zealReducer,
});
