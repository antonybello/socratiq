import { SEARCH_AUTHORS, SEARCH_AUTHORS_SUCCESS, 
         SEARCH_TAGS, SEARCH_TAGS_SUCCESS } 
      from '../constants/AppConstants';

import axios from 'axios';

const ROOT_URL = 'https://socratiq-app.appspot.com';

export function searchAuthors(query) {
  const request = {
    method: 'get',
    url: `${ROOT_URL}/users`,
    params: { search_query: query }
  };

  return {
    type: SEARCH_AUTHORS,
    payload: axios(request),
  };
}

export function searchAuthorsSuccess(payload) {
  return {
    type: SEARCH_AUTHORS_SUCCESS,
    payload: payload.data
  };
}

export function searchTags(query) {
  const request = {
    method: 'get',
    url: `${ROOT_URL}/tags`,
    params: { search_query: query }
  };

  return {
    type: SEARCH_TAGS,
    payload: axios(request),
  };
}

export function searchTagsSuccess(payload) {
  return {
    type: SEARCH_TAGS_SUCCESS,
    payload: payload.data
  };
}