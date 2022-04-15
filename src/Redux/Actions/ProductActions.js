import * as actionTypes from "../Constants/ProductConstants";
import api from "../../api";

// Get All Products
export const getProducts = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  api
    .post("/product/get")
    .then((res) =>
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: res.data.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: err })
    );
};

export const getProductId = (id) => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_ID_REQUEST });
  let url = "/product/get/" + id;
  api
    .get(url)
    .then((res) =>
      dispatch({ type: actionTypes.GET_PRODUCT_ID_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_PRODUCT_ID_FAIL, payload: err })
    );
};
