import {
  FOLLOW, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_FAILURE, UNFOLLOW_SUCCESS, UNFOLLOW, SIGNUP_USER, 
  SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_SIGNUP_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, RESET_SIGNIN_USER,
	LOGOUT_USER
} from '../constants/AppConstants';

const assign = Object.assign;

// status can be:
// 1. 'signup' (signing up)
// 2. 'signin' (signing in)
// 3. 'validate'(validate fields)
// 4. 'authenticated'(after signin)
// 5. 'logout' (after logout)

const INITIAL_STATE = {status:null, token: null, error:null, loading: false, userid: null, tagsFollowing: null, usersFollowing: null };

export default function(state = INITIAL_STATE, action) {
  let error, authToken, tagsFollowing, usersFollowing;
  switch(action.type) {

    case SIGNUP_USER:
      return assign({ ...state, status:'signup', token: null, error:null, loading: true, userid: null});
    case SIGNUP_USER_SUCCESS:
			authToken = action.payload.headers.authorization;
      return assign({ ...state, status:'authenticated', token: authToken, loading: false, userid: action.userid, tagsFollowing: [], usersFollowing: []});
    case SIGNUP_USER_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, status:'signup', token: null, error:error, loading: false, userid: null});
		case RESET_SIGNUP_USER:
			return assign({ ...state, status:'signup', token: null, error: null, loading: false, userid: null});

    case SIGNIN_USER:
      return assign({ ...state, status:'signin', token: null, error:null, loading: true, userid: null});
    case SIGNIN_USER_SUCCESS:
			authToken = action.payload.headers.authorization;
      tagsFollowing = action.payload.data.tagsFollowed;
      usersFollowing = action.payload.data.usersFollowed;
      return assign({ ...state, status:'authenticated', token: authToken, error:null, loading: false, userid: action.userid, tagsFollowing: tagsFollowing, usersFollowing: usersFollowing});
    case SIGNIN_USER_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, status:'signin', token: null, error: error, loading: false, userid: null});
		case RESET_SIGNIN_USER:
			return assign({ ...state, status:'signin', token: null, error: null, loading: false, userid: null});

    case LOGOUT_USER:
      return assign({...state, status:'logout', token: null, error:null, loading: false, userid: null});

    case FOLLOW:
      return assign({ ...state, error: null });
    case FOLLOW_SUCCESS:
      tagsFollowing = state.tagsFollowing;
      usersFollowing = state.tagsFollowing;
      if (action.followee.type == 'tag') {
        tagsFollowing = state.tagsFollowing.slice();
        tagsFollowing.push(action.followee.id);
      } else if (action.followee.type == 'user') {
        usersFollowing = state.usersFollowing.slice();
        usersFollowing.push(action.followee.id);
      }
      return assign({ ...state, error: null, tagsFollowing: tagsFollowing, usersFollowing: usersFollowing });
    case FOLLOW_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, error: error });

    case UNFOLLOW:
       return assign({ ...state, error: null });    
    case UNFOLLOW_SUCCESS:
      tagsFollowing = state.tagsFollowing;
      usersFollowing = state.usersFollowing;
      if (action.followee.type == 'tag') {
        tagsFollowing = tagsFollowing.filter((tag) => tag !== action.followee.id);
      } else if (action.followee.type == 'user') {
        usersFollowing = usersFollowing.filter((user) => user !== action.followee.id);
      }
      return assign({ ...state, error: null, tagsFollowing: tagsFollowing, usersFollowing: usersFollowing });    
    case UNFOLLOW_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, error: error });

    default:
    return state;
  }
}
