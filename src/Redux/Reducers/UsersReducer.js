import * as actionTypes from "../Constants/UserConstants";
import { getUserDetails } from "../../Utils/Local";
let initial = {};
if (getUserDetails()) {
  initial = { user: getUserDetails(), loggedIn: true };
} else {
  initial = { user: {}, loggedIn: false, loading: false };
}
const loginUser = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGIN_REQUEST:
      return {
        loading: true,
        user: {},
        loggedIn: false,
      };
    case actionTypes.GET_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        loggedIn: true,
      };
    case actionTypes.GET_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
        loggedIn: false,
      };
    case actionTypes.GET_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_LOGOUT_SUCCESS:
      return {
        loading: false,
        user: {},
        loggedIn: false,
      };
    case actionTypes.GET_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.ADD_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.ADD_ADDRESS_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case actionTypes.ADD_ADDRESS_FAIL:
      return { ...state, user: {}, loading: false, error: action.payload };
      case actionTypes.CHANGE_DETAILS_REQUEST:
        return { ...state, loading: true };
      case actionTypes.CHANGE_DETAILS_SUCCESS:
        return { ...state, user: action.payload, loading: false };
      case actionTypes.CHANGE_DETAILS_FAIL:
        return { ...state, user: {}, loading: false, error: action.payload };
    case actionTypes.GET_USER_ID_REQUEST: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_USER_ID_SUCCESS: {
      return { ...state, loading: false, user: action.payload };
    }
    case actionTypes.GET_USER_ID_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default loginUser;
