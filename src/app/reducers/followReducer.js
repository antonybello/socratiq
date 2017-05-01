import {
  FOLLOW, FOLLOW_SUCCESS, FOLLOW_FAILURE, 
  UNFOLLOW, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
} from '../constants/AppConstants';

const INITIAL_STATE = { error:null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case FOLLOW:
      return { error: null };
    case FOLLOW_SUCCESS:
      return { error: null };
    case FOLLOW_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return { error: error };

    case UNFOLLOW:
      return { error: null };
    case UNFOLLOW_SUCCESS:
      return { error: null };
    case UNFOLLOW_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return { error: error };

    default:
    return state;
  }
}