import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE,
	CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE
} from '../constants/ArticleConstants';

const INITIAL_STATE = { articlesList: {articles: [], error:null, loading: false},
						newArticle:{article:null, error: null, loading: false},
						activeArticle:{article:null, error:null, loading: false},
						deletedArticle: {article: null, error:null, loading: false},
					};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_ARTICLES:// start fetching articles and set loading = true
  	return { ...state, articlesList: {articles:[], error: null, loading: true} };
  case FETCH_ARTICLES_SUCCESS:// return list of articles and make loading = false
   return { ...state, articlesList: {articles: action.payload, error:null, loading: false} };
  case FETCH_ARTICLES_FAILURE:// return error and make loading = false
   error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
   return { ...state, articlesList: {articles: [], error: error, loading: false} };

  case FETCH_ARTICLE:
   return { ...state, activeArticle:{...state.activearticle, loading: true}};
  case FETCH_ARTICLE_SUCCESS:
   return { ...state, activeArticle: {article: action.payload, error:null, loading: false}};
  case FETCH_ARTICLE_FAILURE:
   error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
   return { ...state, activeArticle: {article: null, error:error, loading:false}};

  case CREATE_ARTICLE:
  	return {...state, newArticle: {...state.newarticle, loading: true}}
  case CREATE_ARTICLE_SUCCESS:
  	return {...state, newArticle: {article:action.payload, error:null, loading: false}}
  case CREATE_ARTICLE_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, newArticle: {article:null, error:error, loading: false}}
  default:
    return state;

  }
}
