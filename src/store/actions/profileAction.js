import axios from "axios";
import { setAlert } from "./alertAction";

import {
  GET_PROFILE,
  PROFILE_ERROR
} from '../actionTypes/profileActionTypes';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusTest, status: err.response.state}
    })
  }
}

// Create or update profile
export const createProfile = (formData, navigate, edit = false) => async dispatch => {
  try {
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    const res  = await axios.post('/api/profile', formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })

    dispatch(setAlert(edit ? 'Profile updated' : 'Profile Created', 'success'));

    if(!edit){
      navigate('/dashboard')
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors) {

      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'))
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusTest, status: err.response.state}
    }) 
  }
}

// Add experience
export const createProfile = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    const res  = await axios.put('/api/profile/experience', formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Experience added', 'success'));
    navigate('/dashboard');

  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'))
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusTest, status: err.response.state}
    }) 
  }
}

export const createProfile = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    const res  = await axios.put('/api/profile/education', formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Education added', 'success'));
    navigate('/dashboard');

  } catch (err) {
    const errors = err.response.data.errors;
    
    if(errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'))
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusTest, status: err.response.state}
    }) 
  }
}