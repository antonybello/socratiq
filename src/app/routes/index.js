import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomeFeed from '../components/homeFeed/HomeFeed';
import ArticleView from '../components/articleView/ArticleView';
import TagView from '../components/tagView/TagView';
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';
import SearchPage from '../components/searchResults/SearchPage';
import ArticlePost from '../components/articlePost/ArticlePost';
import ProfilePage from '../components/profile/ProfilePage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomeFeed}/>
    <Route path="/article/:id" component={ArticleView}></Route>
    <Route path="/tag/:id" component={TagView}></Route>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/search" component={SearchPage}/>
    <Route path="/new" component={ArticlePost}/>
    <Route path="/profile/:id" component={ProfilePage}/>
  </Route>
);
