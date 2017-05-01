import { SEARCH_AUTHORS, SEARCH_AUTHORS_SUCCESS,
         SEARCH_TAGS, SEARCH_TAGS_SUCCESS } from '../constants/AppConstants';

const INITIAL_STATE = { authors: null, tags: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case SEARCH_AUTHORS:
    return { ...state, authors: null };

  case SEARCH_AUTHORS_SUCCESS:
    return { ...state, authors: action.payload };

  case SEARCH_TAGS:
    return { ...state, tags: null };
 
  case SEARCH_TAGS_SUCCESS:
    return { ...state, tags: action.payload };
 
  default:
    return state;

  }
}
