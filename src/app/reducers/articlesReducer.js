import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE,
	CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE
} from '../constants/ArticleConstants';

const INITIAL_STATE = { postsList: {posts: [], error:null, loading: false},
						newPost:{post:null, error: null, loading: false},
						activePost:{post:null, error:null, loading: false},
						deletedPost: {post: null, error:null, loading: false},
					};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_ARTICLES:// start fetching posts and set loading = true
  	return { ...state, postsList: {posts:[], error: null, loading: true} };
  case FETCH_ARTICLES_SUCCESS:// return list of posts and make loading = false
   return { ...state, postsList: {posts: action.payload, error:null, loading: false} };
  case FETCH_ARTICLES_FAILURE:// return error and make loading = false
   error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
   return { ...state, postsList: {posts: [], error: error, loading: false} };

  case FETCH_ARTICLE:
   return { ...state, activePost:{...state.activePost, loading: true}};
  case FETCH_ARTICLE_SUCCESS:
   return { ...state, activePost: {post: action.payload, error:null, loading: false}};
  case FETCH_ARTICLE_FAILURE:
   error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
   return { ...state, activePost: {post: null, error:error, loading:false}};

  case CREATE_ARTICLE:
  	return {...state, newPost: {...state.newPost, loading: true}}
  case CREATE_ARTICLE_SUCCESS:
  	return {...state, newPost: {post:action.payload, error:null, loading: false}}
  case CREATE_ARTICLE_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, newPost: {post:null, error:error, loading: false}}
  default:
    return state;

  }
}
