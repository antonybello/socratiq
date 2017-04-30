import { FETCH_PROFILE, FETCH_PROFILE_SUCCESS } from '../constants/AppConstants';
import axios from 'axios';

const ROOT_URL = 'https://socratiq-app.appspot.com';

export function fetchProfile(id, token) {
  const request = {
    method: 'get',
    url: `${ROOT_URL}/users/${id}`,
    withCredentials: true
  };

  if (token) {
    request.headers = { 'Authorization': token };
  }

  return {
    type: FETCH_PROFILE,
    payload: axios(request),
  };
}

export function fetchProfileSuccess(payload) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: payload.data
  };
}