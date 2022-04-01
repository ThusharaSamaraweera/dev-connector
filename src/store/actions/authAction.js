import axios from 'axios';
import { HTTPS_METHODS, restClient } from '../../utils/restClient';
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, 
      LOGIN_SUCCESS, LOGOUT } from '../actionTypes/authActionTypes';
import { CLEAR_PROFILE } from '../actionTypes/profileActionTypes';
import { setAlert } from './alertAction';
import { BASE_URL } from '../../utils/restClient';

// Load user
export const loadUser = () => async dispatch => {
  
  try {
    const res = await restClient({
      method: HTTPS_METHODS.GET,
      url: 'api/auth',
    })

    if(res.status !== 200){
      dispatch({
        type: AUTH_ERROR,
      })
      return;
    }
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
}

// Register user
export const register = ({name, email, password}) => async dispatch => {

  const body = JSON.stringify({name, email, password});

  try {
    const res = await restClient({
      method: HTTPS_METHODS.POST,
      url: '/api/users',
    })
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data 
    })
    dispatch(loadUser());

  } catch (err) {
      const errors = err.response.data.errors;
      if(errors) {
        errors.forEach(error => {
          dispatch(setAlert(error.msg, 'danger'))
        });
      }
      dispatch({
        type: REGISTER_FAIL
      })
  }
}

// login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password});

  try {
    const res = await axios.post(`${BASE_URL}/api/auth`, body, config);

    if(res.status !== 200){
      return;
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data 
    })

    dispatch(loadUser());

  } catch (err) {
      const errors = err.response.data.errors;
      if(errors) {
        errors.forEach(error => {
          dispatch(setAlert(error.msg, 'danger'))
        });
      }
      dispatch({
        type: LOGIN_FAIL
      }) 
  }
}

// Logout , clear profile 
export const logout = () => dispatch => {
  dispatch({type: CLEAR_PROFILE})
  dispatch({type: LOGOUT})
}