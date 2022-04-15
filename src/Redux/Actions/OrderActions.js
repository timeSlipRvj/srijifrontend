import * as actionTypes from "../Constants/CartConstants";
import api from "../../api";
import { getAuthToken, getUser } from "../../Utils/Local";
export const saveOrderDetails = (order) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ORDER_PROGRESS_SUCCESS,
      payload: order,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_PROGRESS_FAIL,
      payload: "something went wrong",
    });
  }
};

export const sendOrder = (order, item) => (dispatch) => {
  let token = getAuthToken();
  dispatch({ type: actionTypes.SEND_ORDER_REQUEST });
  api
    .post("/order", {
      headers: { token: token },
      data: order,
      ItemsOrdered: item,
    })
    .then((res) =>
      dispatch({ type: actionTypes.SEND_ORDER_SUCCESS, payload: res.data.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.SEND_ORDER_FAIL, payload: err })
    );
};

export const getOrder = () => (dispatch) => {
  let token = getAuthToken();
  dispatch({ type: actionTypes.GET_ORDER_REQUEST });
  let url = "/order/get/user/" + getUser();
  // console.log(url)
  api
    .get(url, { headers: { token: token } })
    .then((res) =>
      dispatch({ type: actionTypes.GET_ORDER_SUCCESS, payload: res.data.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_ORDER_FAIL, payload: err })
    );
};
