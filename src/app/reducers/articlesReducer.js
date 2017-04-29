import {
	FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
	FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS,  FETCH_ARTICLE_FAILURE,
	POST_ARTICLE, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE, RESET_POST_ARTICLE,
	DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE
} from '../constants/ArticleConstants';

const assign = Object.assign;

const INITIAL_STATE = { articlesList: {articles: [], error:null, loading: false},
						newArticle:{article:null, error: null, loading: false},
						activeArticle:{article:null, error:null, loading: false},
						deletedArticle: {article: null, error:null, loading: false},
					};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_ARTICLES:// start fetching articles and set loading = true
  	return assign({ ...state, articlesList: {articles:[], error: null, loading: true} });
  case FETCH_ARTICLES_SUCCESS:// return list of articles and make loading = false
   return assign({ ...state, articlesList: {articles: action.payload, error:null, loading: false} });
  case FETCH_ARTICLES_FAILURE:// return error and make loading = false
   error = action.payload || {message: action.payload.message};
   return assign({ ...state, articlesList: {articles: [], error: error, loading: false} });

  case FETCH_ARTICLE:
   return assign({ ...state, activeArticle:{...state.activeArticle, loading: true}});
  case FETCH_ARTICLE_SUCCESS:
   return assign({ ...state, activeArticle: {article: action.payload, error:null, loading: false}});
  case FETCH_ARTICLE_FAILURE:
   error = action.payload || {message: action.payload.message};
   return assign({ ...state, activeArticle: {article: null, error:error, loading:false} });

  case POST_ARTICLE:
  	return assign({...state, newArticle: {...state.newArticle, loading: true}});
  case POST_ARTICLE_SUCCESS:
  	return assign({...state, newArticle: {article:action.payload, error:null, loading: false}});
  case POST_ARTICLE_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return assign({...state, newArticle: {article:null, error:error, loading: false}});
	case RESET_POST_ARTICLE:
		return assign({...state, newArticle: {article:null, error:null, loading: false}});
  default:
    return state;

  }
}
