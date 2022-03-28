import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  authReducer,
  alert,
  ProfileReducer
});
