import * as actionTypes from "../Constants/CartConstants";

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_REQUEST:
      return { ...state, loading: true, cart: [] };
    case actionTypes.GET_CART_SUCCESS:
      return { ...state, loading: false, cart: action.payload };
    case actionTypes.GET_CART_FAIL:
      return { ...state, loading: false, cart: [], error: action.payload };
    case actionTypes.ADD_CART_REQUEST:
      return { ...state, loading: true, cart: [] };
    case actionTypes.ADD_CART_SUCCESS:
      return { ...state, loading: false, cart: action.payload };
    case actionTypes.ADD_CART_FAIL:
      return { ...state, loading: false, cart: [], error: action.payload };
    case actionTypes.DELETE_CART_REQUEST:
      return { ...state, loading: true, cart: [] };
    case actionTypes.DELETE_CART_SUCCESS:
      return { ...state, loading: false, cart: action.payload };
    case actionTypes.DELETE_CART_FAIL:
      return { ...state, loading: false, cart: [], error: action.payload };
    default:
      return state;
  }
};
