import * as api from "../api";
import {
  FETCH_ZEAL_ID_FAILURE,
  FETCH_ZEAL_ID_SUCCESS,
} from "./actionType/actionType";

export const fetchZealId = (loaderOff) => async (dispatch) => {
  try {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) return;
    const response = await api.fetchZealId(jwtToken);
    if (response.status === 401) {
      // User authentication failed
      return;
    } else if (response.status === 404) {
      dispatch({ type: FETCH_ZEAL_ID_FAILURE, error: "Payment is not done!" });
    } else if (response.status === 200) {
      dispatch({
        type: FETCH_ZEAL_ID_SUCCESS,
        payload: { zealId: response.data.zeal_id, step: 5 },
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_ZEAL_ID_FAILURE,
      payload: { error: error.message },
    });
  } finally {
    loaderOff();
  }
};
