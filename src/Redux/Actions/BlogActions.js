import * as actionTypes from "../Constants/BlogConstants";
import api from "../../api";


export const getBlogs = (sortBy, skipNumber, limitNumber) => (dispatch) => {
  dispatch({ type: actionTypes.GET_BLOG_REQUEST });

  api
    .post("blog/get", {
      sortBy,
      skipNumber,
      limitNumber,
    })
    .then((res) =>
      dispatch({
        type: actionTypes.GET_BLOG_SUCCESS,
        payload: res.data.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_BLOG_FAIL,
        payload: err,
      })
    );
};

export const getSingleBlog = (id) => (dispatch) => {
  let url = "/blog/get/" + id;
  dispatch({ type: actionTypes.GET_SINGLE_BLOG_REQUEST });
  api
    .get(url)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_SINGLE_BLOG_SUCCESS,
        payload: res.data.data,
      })
    )
    .catch((err) => dispatch({ type: actionTypes.GET_SINGLE_BLOG_FAIL }));
};
