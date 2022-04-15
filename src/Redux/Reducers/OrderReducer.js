import * as actionTypes from "../Constants/CartConstants";

export const saveOrderReducer = (state = { orderDetails: {} }, action) => {
  switch (action.type) {
    case actionTypes.ORDER_PROGRESS_REQUEST:
      return {
        loading: true,
        orderDetails: {},
      };
    case actionTypes.ORDER_PROGRESS_SUCCESS:
      return {
        loading: false,
        orderDetails: action.payload,
      };
    case actionTypes.ORDER_PROGRESS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const sendOrderReducer = (
  state = { loading: false, error: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.SEND_ORDER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.SEND_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.SEND_ORDER_SUCCESS:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};
export const getOrderReducer = (
  state = { loading: false, error: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_REQUEST:
      return { ...state, loading: true, error: {} };
    case actionTypes.GET_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.GET_ORDER_SUCCESS:
      return { loading: false, data: action.payload, error: {} };
    default:
      return state;
  }
};
