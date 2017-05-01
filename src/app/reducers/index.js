import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArticlesReducer from './articlesReducer';
import PaneSelectorReducer from './paneSelectorReducer';
import UserReducer from './userReducer';
import ProfileReducer from './profileReducer';
import SearchReducer from './searchReducer';


const rootReducer = combineReducers({
  user: UserReducer,
  form: formReducer,
  articles: ArticlesReducer,
  paneSelector: PaneSelectorReducer,
  profile: ProfileReducer,
  searchResults: SearchReducer
});

export default rootReducer;
