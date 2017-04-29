import {
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
	FOLLOW_USER, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE,
	UNFOLLOW_USER, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE,
	LOGOUT_USER
} from '../constants/AppConstants';

const assign = Object.assign;

// status can be:
// 1. 'signup' (signing up)
// 2. 'signin' (signing in)
// 3. 'validate'(validate fields)
// 4. 'authenticated'(after signin)
// 5. 'logout' (after logout)

const INITIAL_STATE = {status:null, token: null, error:null, loading: false, userid: null};

export default function(state = INITIAL_STATE, action) {
  let error, authToken;
  switch(action.type) {

    case SIGNUP_USER:
      return assign({ ...state, status:'signup', token: null, error:null, loading: true, userid: null});
    case SIGNUP_USER_SUCCESS:
			authToken = action.payload.headers.authorization;
      return assign({ ...state, status:'authenticated', token: authToken, loading: false, userid: action.userid});
    case SIGNUP_USER_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, status:'signup', token: null, error:error, loading: false, userid: null});

    case SIGNIN_USER:
      return assign({ ...state, status:'signin', token: null, error:null, loading: true, userid: null});
    case SIGNIN_USER_SUCCESS:
			authToken = action.payload.headers.authorization;
      return assign({ ...state, status:'authenticated', token: authToken, error:null, loading: false, userid: action.userid});
    case SIGNIN_USER_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return assign({ ...state, status:'signin', token: null, error:error, loading: false, userid: null});

		case FOLLOW_USER:
			return assign({ ...state, error:null, loading: false });
		case FOLLOW_USER_SUCCESS:
			return assign({ ...state, error:null, loading: false });
		case FOLLOW_USER_FAILURE:
			error = action.payload.data || {message: action.payload.message};
			return assign({ ...state, error:error, loading: false });

		case UNFOLLOW_USER:
			return assign({ ...state, error:null, loading: false });
		case UNFOLLOW_USER_SUCCESS:
			return assign({ ...state, error:null, loading: false });
		case UNFOLLOW_USER_FAILURE:
			error = action.payload.data || {message: action.payload.message};
			return assign({ ...state, error:error, loading: false });

    case LOGOUT_USER:
      return assign({...state, status:'logout', token: null, error:null, loading: false, userid: null});

    case RESET_USER:
      return assign({ ...state, status:null, token: null, error:null, loading: false, userid: null});

    default:
    return state;
  }
}
