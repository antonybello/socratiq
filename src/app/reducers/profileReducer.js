import {
  FETCH_PROFILE, FETCH_PROFILE_SUCCESS
} from '../constants/AppConstants';


const INITIAL_STATE = { loading: null, institution: null, name: null, 
                        tagsFollowed: null, usersFollowed: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case FETCH_PROFILE:
    return { ...state, loading: true };

  case FETCH_PROFILE_SUCCESS:
    return { ...state, loading: false,
             name: action.payload.name, 
             institution: action.payload.institution, 
             tagsFollowed: action.payload.tagsFollowed, 
             usersFollowed: action.payload.usersFollowed };

  default:
    return state;

  }
}
