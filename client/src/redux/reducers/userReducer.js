import {
  LOGIN_SUCCESS,
  // LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    // case LOGIN_FAILED:
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: null,
    //   };
    default:
      return state;
  }
};

export default userReducer;
