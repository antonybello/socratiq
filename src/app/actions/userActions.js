import axios from 'axios';

import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
         SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, LOGOUT_USER} from '../constants/AppConstants';


const ROOT_URL = 'https://socratiq-app.appspot.com'

// export function validateEmail(validateEmailToken) {
//   //check if token from welcome email is valid, if so, update email as verified and login the user from response
//   const request = axios.get(`${ROOT_URL}/validateEmail/${validateEmailToken}`);
//
//   return {
//     type: VALIDATE_EMAIL,
//     payload: request
//   };
// }
//
// export function validateEmailSuccess(currentUser) {
//   return {
//     type: VALIDATE_EMAIL_SUCCESS,
//     payload: currentUser
//   };
// }
//
// export function validateEmailFailure(error) {
//   return {
//     type: VALIDATE_EMAIL_FAILURE,
//     payload: error
//   };
// }
//
// export function meFromToken(tokenFromStorage) {
//   //check if the token is still valid, if so, get me from the server
//
//   const request = axios({
//     method: 'get',
//     url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
//     headers: {
//       'Authorization': `Bearer ${tokenFromStorage}`
//     }
//   });
//
//   return {
//     type: ME_FROM_TOKEN,
//     payload: request
//   };
// }
//
// export function meFromTokenSuccess(currentUser) {
//   return {
//     type: ME_FROM_TOKEN_SUCCESS,
//     payload: currentUser
//   };
// }
//
// export function meFromTokenFailure(error) {
//   return {
//     type: ME_FROM_TOKEN_FAILURE,
//     payload: error
//   };
// }
//
//
// export function resetToken() {//used for logout
//   return {
//     type: RESET_TOKEN
//   };
// }


export function signUpUser(formValues) {
  const username = formValues.userid
  const payload = {
    "name": formValues.name,
    "email": formValues.email,
    "password": formValues.password
  };

  const request = axios.put(`${ROOT_URL}/users/${username}`, payload);
  return {
    type: SIGNUP_USER,
    payload: request
  };

}

export function signUpUserSuccess(user, username) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user,
    userid: username
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}


export function resetUser() {
  return {
    type: RESET_USER,
  };
}

export function signInUser(formValues) {
  const request = axios.post(`${ROOT_URL}/login`, formValues);
  console.log(formValues);
  return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user, username) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user,
    userid: username
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}
export function updateUserEmail(email) {
  return {
    type: UPDATE_USER_EMAIL,
    payload:email
  };
}
