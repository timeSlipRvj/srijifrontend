import * as actionTypes from "../Constants/WishlistConstants";

export const wishlistReducer = (state = { wishlist: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_WISHLIST_REQUEST:
      return { ...state, loading: true, wishlist: [] };
    case actionTypes.GET_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishlist: action.payload };
    case actionTypes.GET_WISHLIST_FAIL:
      return { ...state, loading: false, wishlist: [], error: action.payload };
    case actionTypes.ADD_WISHLIST_REQUEST:
      return { ...state, loading: true, wishlist: [] };
    case actionTypes.ADD_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishlist: action.payload };
    case actionTypes.ADD_WISHLIST_FAIL:
      return { ...state, loading: false, wishlist: [], error: action.payload };
    case actionTypes.DELETE_WISHLIST_REQUEST:
      return { ...state, loading: true, wishlist: [] };
    case actionTypes.DELETE_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishlist: action.payload };
    case actionTypes.DELETE_WISHLIST_FAIL:
      return { ...state, loading: false, wishlist: [], error: action.payload };
    default:
      return state;
  }
};
