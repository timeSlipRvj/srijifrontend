import * as actionTypes from "../Constants/ProductConstants";
const initialState = { loading: false, products: [], error: {} };
const initialState2 = { loading: false, product: {}, error: {} };

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { loading: false, products: [], error: action.payload };

    default:
      return state;
  }
}

export const ProductDetailsReducer = (state = initialState2, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_ID_REQUEST:
      return { loading: true, product: {}, error: {} };
    case actionTypes.GET_PRODUCT_ID_SUCCESS:
      return { loading: false, product: action.payload, error: {} };
    case actionTypes.GET_PRODUCT_ID_FAIL:
      return { loading: false, product: {}, error: action.payload };

    default:
      return state;
  }
};
