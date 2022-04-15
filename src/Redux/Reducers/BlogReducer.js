import * as actionTypes from "../Constants/BlogConstants";

export const getBlogsReducer = (
  state = { blogs: [], loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_BLOG_REQUEST:
      return {
        loading: true,
        blogs: [],
      };
    case actionTypes.GET_BLOG_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
      };
    case actionTypes.GET_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSingleBlogReducer = (
  state = { data: {}, loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_BLOG_REQUEST:
      return {
        loading: true,
        data: {},
      };
    case actionTypes.GET_SINGLE_BLOG_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case actionTypes.GET_SINGLE_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
