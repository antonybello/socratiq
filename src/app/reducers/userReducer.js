import {
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
	LOGOUT_USER
} from '../constants/AppConstants';

const assign = Object.assign;

// status can be:
// 1. 'signup' (signing up)
// 2. 'signin' (signing in)
// 3. 'validate'(validate fields)
// 4. 'authenticated'(after signin)
// 5. 'logout' (after logout)

const INITIAL_STATE = {status:null, error:null, loading: false, data: null};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case SIGNUP_USER:// sign up user, set loading = true and status = signup
      return assign({ ...state, status:'signup', error:null, loading: true, data: null});
    case SIGNUP_USER_SUCCESS://return user, status = authenticated and make loading = false
      return assign({ ...state, status:'authenticated', error:null, loading: false, data: action.payload.config.data});
    case SIGNUP_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
      return assign({ ...state, status:'signup', error:error, loading: false, data: null});


    case SIGNIN_USER:// sign in user,  set loading = true and status = signin
      return assign({ ...state, status:'signin', error:null, loading: true, data: null});
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
      return assign({ ...state, status:'authenticated', error:null, loading: false, data: action.payload.config.data}); //<-- authenticate)d
    case SIGNIN_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
      return assign({ ...state, status:'signin', error:error, loading: false, data: null});

    case LOGOUT_USER:
      return assign({...state, status:'logout', error:null, loading: false, data: null});

    case RESET_USER:// reset authenticated user to initial state
      return assign({ ...state, status:null, error:null, loading: false, data: null});

    default:
    return state;
  }
}
