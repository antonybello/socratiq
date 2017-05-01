import axios from 'axios';

import {
  FOLLOW, FOLLOW_SUCCESS, FOLLOW_FAILURE, 
  UNFOLLOW, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
} from '../constants/AppConstants';

const ROOT_URL = 'https://socratiq-app.appspot.com';

export function follow(userid, followee, token) {
  const { type, id } = followee;
  console.log(followee);
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/${type + 's'}/${id}/followers/${userid}`,
    headers: { 'Authorization': token },
    withCredentials: true
  });

  return {
    type: FOLLOW,
    payload: request
  };
}

export function followSuccess() {
  return {
    type: FOLLOW_SUCCESS
  }
}

export function followFailure(error) {
  return {
    type: FOLLOW_FAILURE,
    payload: error
  }
}

export function unfollow(userid, followee, token) {
  const { type, id } = followee;
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/${type + 's'}/${id}/followers/${userid}`,
    headers: { 'Authorization': token },
    withCredentials: true
  });

  return {
    type: UNFOLLOW,
    payload: request
  };
}

export function unfollowSuccess() {
  return {
    type: UNFOLLOW_SUCCESS
  };
}

export function unfollowFailure(error) {
  return {
    type: UNFOLLOW_FAILURE,
    payload: error
  };
}