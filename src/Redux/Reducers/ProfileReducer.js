import * as actionTypes from "../Constants/ProfileConstants";
import { getUserDetails } from "../../Utils/Local";

export const ProfileReducer = (
  state = { user: getUserDetails() ? getUserDetails() : {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_PROFILE_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case actionTypes.GET_PROFILE_FAIL:
      return { ...state, user: {}, loading: false, error: action.payload };
      case actionTypes.ADD_ADDRESS_REQUEST:
        return { ...state, loading: true };
      case actionTypes.ADD_ADDRESS_SUCCESS:
        return { ...state, user: action.payload, loading: false };
      case actionTypes.ADD_ADDRESS_FAIL:
        return { ...state, user: {}, loading: false, error: action.payload };
    default:
      return state;
  }
};
