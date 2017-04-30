import {
  SELECT_PANE
} from '../constants/AppConstants';

const INITIAL_STATE = { selectedPane: null };

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case SELECT_PANE:
      return { selectedPane: action.pane };
    
    default:
    return state;
    
  }
}
