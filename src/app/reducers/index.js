import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArticlesReducer from './articlesReducer';
import UserReducer from './userReducer';


const rootReducer = combineReducers({
  user: UserReducer,
  form: formReducer,
  articles: ArticlesReducer
});

export default rootReducer;
