import * as actionTypes from "../Constants/CartConstants";
import api from "../../api";
import { getUser } from "../../Utils/Local";
import { toast } from "react-toastify";
import { getAuthToken } from "../../Utils/Local";

export const getCart = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_CART_REQUEST });
  let url = "/users/get/" + getUser();
  let token = getAuthToken();
  // console.log(url, token);
  api
    .get(url, { headers: { token: token } })
    .then((res) => {
      let final = 0;
      res.data.data.Cart.forEach((item) => {
        item.couponDiscount = 0;
        item.totalPrice = item.product.specialPrice
          ? item.product.specialPriceType === "Fixed"
            ? item.product.specialPrice * item.qty
            : (item.product.price.toString() -
                (item.product.specialPrice.toString() / 100) *
                  item.product.price) *
              item.qty.toString()
          : item.product.price * item.qty;
        final += item.totalPrice;
      });
      res.data.data.Cart["total"] = final;
      console.log(res.data.data.Cart);
      dispatch({
        type: actionTypes.GET_CART_SUCCESS,
        payload: res.data.data.Cart,
      });
    })
    .catch((err) => {
      // toast.error(
      //   `${
      //     err.response?.data?.message
      //       ? err.response.data.message
      //       : "Could not fetch cart."
      //   }`,
      //   {
      //     autoClose: 3000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //   }
      // );
      dispatch({ type: actionTypes.GET_CART_FAIL, payload: err })
    }
    );
};

export const addToCart = (id, qty, stkId) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_CART_REQUEST });
  let token = getAuthToken();
  // console.log(id, qty, "stok", stkId);
  api
    .put("/customer/cart", {
      headers: { token: token },
      productId: id,
      qty: qty,
      stockId: stkId,
    })
    .then((res) => {
      let final = 0;
      res.data.data.Cart.forEach((item) => {
        item.couponDiscount = 0;
        item.totalPrice = item.product.specialPrice
          ? item.product.specialPriceType === "Fixed"
            ? item.product.specialPrice * item.qty
            : (item.product.price.toString() -
                (item.product.specialPrice.toString() / 100) *
                  item.product.price) *
              item.qty.toString()
          : item.product.price * item.qty;
        final += item.totalPrice;
      });
      res.data.data.Cart["total"] = final;
      // console.log("added to cart");

      dispatch({
        type: actionTypes.ADD_CART_SUCCESS,
        payload: res.data.data.Cart,
      });
      toast.success(`Product added to cart.`, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    
    })
    
    .catch((err) => {
      toast.error(
        `${
          err.response?.data?.message
            ? err.response.data.message
            : "Something went wrong."
        }`,
        {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      dispatch({ type: actionTypes.ADD_CART_FAIL, payload: err })
    }
    );
};

export const updateCartQty = (id, qty, stk) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_CART_REQUEST });
  let token = getAuthToken();
  api
    .put("/customer/cart/increase", {
      headers: { token: token },
      productId: id,
      qty: qty,
      stockId: stk,
    })
    .then((res) => {
      let final = 0;
      res.data.data.Cart.forEach((item) => {
        item.couponDiscount = 0;
        item.totalPrice = item.product.specialPrice
          ? item.product.specialPriceType === "Fixed"
            ? item.product.specialPrice * item.qty
            : (item.product.price.toString() -
              (item.product.specialPrice.toString() / 100) *
              item.product.price) *
            item.qty.toString()
          : item.product.price * item.qty;
        final += item.totalPrice;
      });
      res.data.data.Cart["total"] = final;
      dispatch({
        type: actionTypes.ADD_CART_SUCCESS,
        payload: res.data.data.Cart,
      });
      toast.success(`Cart updated.`, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
    })
    .catch((err) => {
      toast.error(
        `${
          err.response?.data?.message
            ? err.response.data.message
            : "Something went wrong."
        }`,
        {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      
      dispatch({ type: actionTypes.ADD_CART_FAIL, payload: err })
  }
    );
};

export const deleteCart = (id, stock) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CART_REQUEST });
  let token = getAuthToken();
  api
    .delete("/customer/cart", {
      headers: { token: token },
      data: { productId: id, stockId: stock },
    })
    .then((res) => {
      let final = 0;
      res.data.data.Cart.forEach((item) => {
        item.couponDiscount = 0;
        item.totalPrice = item.product.specialPrice
          ? item.product.specialPriceType === "Fixed"
            ? item.product.specialPrice * item.qty
            : (item.product.price.toString() -
                (item.product.specialPrice.toString() / 100) *
                  item.product.price) *
              item.qty.toString()
          : item.product.price * item.qty;
        final += item.totalPrice;
      });
      res.data.data.Cart["total"] = final;
      dispatch({
        type: actionTypes.DELETE_CART_SUCCESS,
        payload: res.data.data.Cart,
      });
      toast.success(`Removed from cart.`, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
    })
    .catch((err) => {
      toast.error(
        `${
          err.response?.data?.message
            ? err.response.data.message
            : "Something went wrong."
        }`,
        {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      dispatch({ type: actionTypes.DELETE_CART_FAIL, payload: err })
    }
    );
};
