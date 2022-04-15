import * as actionTypes from "../Constants/StorefrontConstants";
import api from "../../api";
export const getFooterDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_FOOTER_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["Footer"] })
    .then((res) =>
      dispatch({
        type: actionTypes.GET_FOOTER_SUCCESS,
        payload: res.data.data[0],
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_FOOTER_FAIL, payload: err })
    );
};

export const getProductTabs = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_TABS_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["Products"] })
    .then((res) => {
      // console.log(res.data.data[0]);
      dispatch({
        type: actionTypes.GET_PRODUCT_TABS_SUCCESS,
        payload: res.data.data[0],
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.GET_PRODUCT_TABS_FAIL, payload: err })
    );
};

export const getBannerImages = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_BANNER_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["Banners"] })
    .then((res) =>
      dispatch({ type: actionTypes.GET_BANNER_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_BANNER_FAIL, payload: err })
    );
};

export const getMenus = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_MENUS_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["Menus"] })
    .then((res) => {
      // console.log(res.data.data[0]);
      dispatch({
        type: actionTypes.GET_MENUS_SUCCESS,
        payload: res.data.data[0],
      });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: actionTypes.GET_MENUS_FAIL, payload: err });
    });
};
export const getFeatures = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_FEATURES_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["Features"] })
    .then((res) =>
      dispatch({
        type: actionTypes.GET_FEATURES_SUCCESS,
        payload: res.data.data[0].Features,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_FEATURES_FAIL,
        payload: err,
      })
    );
};

export const getLogos = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_LOGO_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["Logo"] })
    .then((res) =>
      dispatch({
        type: actionTypes.GET_LOGO_SUCCESS,
        payload: res.data.data[0].Logo,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_LOGO_FAIL,
        payload: err,
      })
    );
};

export const getGeneral = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_GENERAL_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["General"] })
    .then((res) => {
      dispatch({
        type: actionTypes.GET_GENERAL_SUCCESS,
        payload: res.data.data[0],
      });
    })
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_GENERAL_FAIL,
        payload: err,
      })
    );
};

export const getSocial = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_SOCIAL_LINKS_REQUEST });
  api
    .post("/storefront/get", { selectArray: ["SocialLinks"] })
    .then((res) => {
      dispatch({
        type: actionTypes.GET_SOCIAL_LINKS_SUCCESS,
        payload: res.data.data[0],
      });
    })
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_SOCIAL_LINKS_FAIL,
        payload: err,
      })
    );
};