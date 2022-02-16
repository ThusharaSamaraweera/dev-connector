import { 
  GET_PROFILE, 
  GET_PROFILES, 
  GET_REPOS, 
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE
} from "../actionTypes/profileActionTypes";

const initState = {
  profile: null,
  profiles: [],
  repo: [],
  loading: true,
  error: {}
}

export default function(state = initState, action ){
  const {type, payload} = action;

  switch(type){
    case GET_PROFILE: 
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case GET_PROFILES: 
      return {
        ...state,
        profiles:  payload,
        loading: false
      }
    case GET_REPOS: 
      return {
        ...state,
        repo:  payload,
        loading: false
      }
    case PROFILE_ERROR: 
      return {
        ...state,
        error: payload,
        loading: false
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      }
    default: 
      return state
  }
}