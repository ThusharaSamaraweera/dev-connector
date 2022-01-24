import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';

export default combineReducers({
  authReducer,
  alert
});
