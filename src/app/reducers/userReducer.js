import {
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
	LOGOUT_USER, FOLLOW, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_FAILURE, UNFOLLOW_SUCCESS, UNFOLLOW
} from '../constants/AppConstants';

const assign = Object.assign;

// status can be:
// 1. 'signup' (signing up)
// 2. 'signin' (signing in)
// 3. 'validate'(validate fields)
// 4. 'authenticated'(after signin)
// 5. 'logout' (after logout)

const INITIAL_STATE = {status:null, token: null, error:null, loading: false, userid: null, tagsFollowing: null};

export default function(state = INITIAL_STATE, action) {
  let error, authToken, tagsFollowing;
  switch(action.type) {

    case SIGNUP_USER:
      return assign({ ...state, status:'signup', token: null, error:null, loading: true, userid: null});
    case SIGNUP_USER_SUCCESS:
			authToken = action.payload.headers.authorization;
      return assign({ ...state, status:'authenticated', token: authToken, loading: false, userid: action.userid, tagsFollowing: []});
    case SIGNUP_USER_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, status:'signup', token: null, error:error, loading: false, userid: null});

    case SIGNIN_USER:
      return assign({ ...state, status:'signin', token: null, error:null, loading: true, userid: null});
    case SIGNIN_USER_SUCCESS:
			authToken = action.payload.headers.authorization;
      tagsFollowing = action.payload.data.tagsFollowed;
      return assign({ ...state, status:'authenticated', token: authToken, error:null, loading: false, userid: action.userid, tagsFollowing: tagsFollowing});
    case SIGNIN_USER_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, status:'signin', token: null, error:error, loading: false, userid: null});

    case LOGOUT_USER:
      return assign({...state, status:'logout', token: null, error:null, loading: false, userid: null});

    case RESET_USER:
      return assign({ ...state, status:null, token: null, error:null, loading: false, userid: null});

    case FOLLOW:
      return assign({ ...state, error: null });
    case FOLLOW_SUCCESS:
      tagsFollowing = state.tagsFollowing;
      if (action.followee.type == 'tag') {
        tagsFollowing = state.tagsFollowing.slice();
        tagsFollowing.push(action.followee.id);
      }
      return assign({ ...state, error: null, tagsFollowing: tagsFollowing });
    case FOLLOW_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, error: error });

    case UNFOLLOW:
       return assign({ ...state, error: null });    
    case UNFOLLOW_SUCCESS:
      tagsFollowing = state.tagsFollowing;
      if (action.followee.type == 'tag') {
        tagsFollowing = state.tagsFollowing.filter((tag) => tag !== action.followee.id);
      }
      return assign({ ...state, error: null, tagsFollowing: tagsFollowing });    
    case UNFOLLOW_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, error: error });

    default:
    return state;
  }
}
