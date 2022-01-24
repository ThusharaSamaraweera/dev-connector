import {
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from './../actionTypes/authActionTypes'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case REGISTER_FAIL: 
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      }
    
    case REGISTER_SUCCESS: 
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
  }
  
}

export default authReducer;
