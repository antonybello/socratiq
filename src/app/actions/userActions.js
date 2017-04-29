import axios from 'axios';

import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
         SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, LOGOUT_USER,
         FOLLOW_USER, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE,
         UNFOLLOW_USER, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE } from '../constants/AppConstants';

const ROOT_URL = 'https://socratiq-app.appspot.com';

export function signUpUser(formValues) {
  const userid = formValues.userid;
  const institution = cleanInstitution(formValues.institution);

  const payload = {
    "name": formValues.name,
    "email": formValues.email,
    "institution": institution,
    "password": formValues.password
  };

  const request = axios.put(`${ROOT_URL}/users/${userid}`, payload);
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

export function followUser(userid, authorid, token) {
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/users/${authorid}/followers/${userid}`,
    headers: { 'Authorization': token },
    withCredentials: true
  });

  return {
    type: FOLLOW_USER,
    payload: request
  };
}

export function followUserSuccess() {
  return {
    type: FOLLOW_USER_SUCCESS
  }
}

export function followUserFailure(error) {
  return {
    type: FOLLOW_USER_FAILURE,
    payload: error
  }
}

export function unfollowUser(userid, authorid, token) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/users/${authorid}/followers/${userid}`,
    headers: { 'Authorization': token },
    withCredentials: true
  });

  return {
    type: UNFOLLOW_USER,
    payload: request
  };
}

export function unfollowUserSuccess() {
  return {
    type: UNFOLLOW_USER_SUCCESS
  };
}

export function unfollowUserFailure(error) {
  return {
    type: UNFOLLOW_USER_FAILURE,
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

function cleanInstitution(formVal) {
  return typeof formVal === 'object' ? formVal[0] : formVal;
}
