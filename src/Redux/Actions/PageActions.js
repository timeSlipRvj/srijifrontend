import * as actionTypes from "../Constants/PageConstants";
import api from "../../api";

export const getPage = (url) => (dispatch) => {
  dispatch({ type: actionTypes.GET_PAGE_REQUEST });
  let URL = "page/url/" + url;
  // console.log(URL);
  api
    .get(URL)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_PAGE_SUCCESS,
        payload: res.data.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_PAGE_FAIL,
        payload: "something went wrong",
      })
    );
};
