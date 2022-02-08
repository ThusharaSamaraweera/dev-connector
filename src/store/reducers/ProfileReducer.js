import { 
  GET_PROFILE, 
  PROFILE_ERROR,
  UPDATE_PROFILE,
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
    case PROFILE_ERROR: 
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: 
      return state
  }
}