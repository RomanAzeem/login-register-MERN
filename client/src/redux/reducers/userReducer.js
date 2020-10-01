import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  success: false,
  message: '',
  user: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        success: false,
        message: '',
        user: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAILED:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default userReducer;
