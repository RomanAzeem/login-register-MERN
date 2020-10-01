import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alert from './alert';

const rootReducer = combineReducers({
  user: userReducer,
  alert,
});

export default rootReducer;
