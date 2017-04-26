import axios from 'axios';
import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE,
	CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE
} from '../constants/ArticleConstants';

// TODO: Add actions for fetch post, create post, delete post

const ROOT_URL = 'https://socratiq-app.appspot.com';


// TODO: Get legit token from state and add to request headers
export function fetchArticles() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/articles`
  });

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
}

export function fetchArticlesSuccess(posts) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: posts
  };
}

export function fetchArticlesFailure(error) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  };
}