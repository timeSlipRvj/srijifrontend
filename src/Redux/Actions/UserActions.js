import * as actionTypes from "../Constants/UserConstants";
import api from "../../api";
import {
  setUserDetails,
  setAuthToken,
  removeUser,
  removeUserDetails,
  removeAuthToken,
  setUser,
  getAuthToken,
  getUser,
} from "../../Utils/Local";

export const loginUser = (email, password) => (dispatch) => {
  dispatch({ type: actionTypes.GET_LOGIN_REQUEST });
  let reqData = { Email: email, Password: password };
  api
    .post("/users/login", { data: reqData })
    .then((res) => {
      setAuthToken(res.data.data.token);
      setUserDetails(res.data.data);
      setUser(res.data.data._id);
      dispatch({ type: actionTypes.GET_LOGIN_SUCCESS, payload: res.data.data });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: actionTypes.GET_LOGIN_FAIL, payload: err });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_LOGOUT_REQUEST });
  removeAuthToken();
  removeUserDetails();
  removeUser();
  dispatch({ type: actionTypes.GET_LOGOUT_SUCCESS });
};

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_LOGIN_REQUEST });
    const { data } = await api.post("/users/", {
      data: user,
      isCustomer: true,
    });
    setAuthToken(data.data.token);
    setUser(data.data._id);
    dispatch({
      type: actionTypes.GET_LOGIN_SUCCESS,
      payload: data.data,
    });
    window.location.reload();
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LOGIN_FAIL,
      payload: "something went wrong",
    });
  }
};

export const setUserAction = (user) => (dispatch) => {
  dispatch({ type: actionTypes.GET_LOGIN_SUCCESS, payload: user });
};

export const getUserId = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_USER_ID_REQUEST });
  let url = "/users/get/" + getUser();
  let token = getAuthToken();
  api
    .get(url, { headers: { token: token } })
    .then((res) =>
      dispatch({
        type: actionTypes.GET_USER_ID_SUCCESS,
        payload: res.data.data,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_USER_ID_FAIL, payload: err })
    );
};
