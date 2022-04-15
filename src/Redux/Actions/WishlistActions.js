import * as actionTypes from "../Constants/WishlistConstants";
import api from "../../api";
import { getUser } from "../../Utils/Local";
import { getAuthToken } from "../../Utils/Local";
export const getWishlist = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_WISHLIST_REQUEST });
  let url = "/users/get/" + getUser();
  api
    .get(url)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_WISHLIST_SUCCESS,
        payload: res.data.data.Wishlist,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_WISHLIST_FAIL, payload: err })
    );
};

export const addToWishlist = (id) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_WISHLIST_REQUEST });
  let token = getAuthToken();
  api
    .put("/customer/wishlist", { headers: { token: token }, productId: id })
    .then((res) =>
      dispatch({
        type: actionTypes.ADD_WISHLIST_SUCCESS,
        payload: res.data.data.Wishlist,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.ADD_WISHLIST_FAIL, payload: err })
    );
};

export const deleteWishlist = (id) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_WISHLIST_REQUEST });
  let token = getAuthToken();
  api
    .delete("/customer/wishlist", {
      headers: { token: token },
      data: { productId: id },
    })
    .then((res) =>
      dispatch({
        type: actionTypes.DELETE_WISHLIST_SUCCESS,
        payload: res.data.data.Wishlist,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.DELETE_WISHLIST_FAIL, payload: err })
    );
};
