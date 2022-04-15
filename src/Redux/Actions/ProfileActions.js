import * as actionTypes from "../Constants/ProfileConstants";
import api from "../../api";
import { getAuthToken } from "../../Utils/Local";
import { getUserDetails, getUser } from "../../Utils/Local";
export const getProfile = (id) => (dispatch) => {
  dispatch({ type: actionTypes.GET_PROFILE_REQUEST });
  let token = getAuthToken();
  api
    .get("/users/get/" + id, { headers: { token: token } })
    .then((res) =>
      dispatch({ type: actionTypes.GET_PROFILE_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_PROFILE_FAIL, payload: err })
    );
};

export const addAddress = (address) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_ADDRESS_REQUEST });
  let token = getAuthToken();
  api
    .put("/users", {
      _id: getUser(),
      headers: { token: token },
      data: { ...getUserDetails(), Address: address },
    })
    .then((res) => {
      dispatch({
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.ADD_ADDRESS_FAIL, payload: err })
    );
};

export const changeDetails = (data) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_DETAILS_REQUEST });
  let token = getAuthToken();
  api
    .put("/users", {
      _id: getUser(),
      headers: { token: token },
      data: { ...getUserDetails(),data },
    })
    .then((res) => {
      dispatch({
        type: actionTypes.CHANGE_DETAILS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.CHANGE_DETAILS_FAIL, payload: err })
    );
};

