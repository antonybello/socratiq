import axios from 'axios';
import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE,
	POST_ARTICLE, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE, RESET_POST_ARTICLE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE
} from '../constants/ArticleConstants';

const ROOT_URL = 'https://socratiq-app.appspot.com';

export function fetchArticles(filters, token) {
	let request = {
    method: 'get',
    url: filters.tag ? `${ROOT_URL}/tags/${filters.tag}/articles` : `${ROOT_URL}/articles`,
		withCredentials: true
  };

	if (token) {
		request.headers = { 'Authorization': token };
	}
  return {
    type: FETCH_ARTICLES,
    payload: axios(request)
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


export function fetchArticle(id, token) {
	let request = {
	  method: 'get',
		url : `${ROOT_URL}/articles/${id}`,
		withCredentials: true
	}

	if (token) {
		request.headers = { 'Authorization': token };
	}

  return {
    type: FETCH_ARTICLE,
    payload: axios(request)
  };
}


export function fetchArticleSuccess(activeArticle) {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: activeArticle
  };
}

export function fetchArticleFailure(error) {
  return {
    type: FETCH_ARTICLE_FAILURE,
    payload: error
  };
}

export function postArticle(formValues, token) {
	const request = axios({
	  method: 'post',
		url: `${ROOT_URL}/articles`,
		data: formValues,
		withCredentials: true,
		headers: { 'Authorization': token }
	})

  return {
    type: POST_ARTICLE,
    payload: request
  };
}


export function postArticleSuccess(newArticle) {
  return {
    type: POST_ARTICLE_SUCCESS,
    payload: newArticle
  };
}

export function postArticleFailure(error) {
  return {
    type: POST_ARTICLE_FAILURE,
    payload: error
  };
}

export function resetPostArticle() {
	return {
		type: RESET_POST_ARTICLE
	}
}
