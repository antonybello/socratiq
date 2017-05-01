import { SEARCH_AUTHORS, SEARCH_AUTHORS_SUCCESS } from '../constants/AppConstants';

const INITIAL_STATE = { authors: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case SEARCH_AUTHORS:
    return { authors: null };

  case SEARCH_AUTHORS_SUCCESS:
    console.log(action.payload);
    return { authors: action.payload };

  default:
    return state;

  }
}
