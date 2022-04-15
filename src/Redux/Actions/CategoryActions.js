import * as actionTypes from "../Constants/CategoryConstants";
import api from "../../api";

export const getCategories = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST });
  api
    .get("/category/get")
    .then((res) =>
      dispatch({
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: res.data.data,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_CATEGORIES_FAIL, payload: err })
    );
};

export const getCategoryProducts =
  (sortBy, skipNumber, limitNumber, searchWord, fieldsInArray) =>
  (dispatch) => {
    dispatch({ type: actionTypes.GET_CATEGORY_PRODUCTS_REQUEST });
    let findFieldsInArray = fieldsInArray;
    api
      .post("product/filter", {
        sortBy,
        skipNumber,
        limitNumber,
        findFieldsInArray,
      })
      .then((res) =>
        dispatch({
          type: actionTypes.GET_CATEGORY_PRODUCTS_SUCCESS,
          payload: res.data.data,
        })
      )
      .catch((err) =>
        dispatch({ type: actionTypes.GET_CATEGORY_PRODUCTS_FAIL, payload: err })
      );
  };
