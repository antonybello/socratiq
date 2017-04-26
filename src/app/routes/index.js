import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomeFeed from '../components/homeFeed/HomeFeed'
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';
import AuthProof from '../components/authproof/AuthProof';
import Profile from '../components/profile/Profile';
import Newpost from '../components/newpost/Newpost';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomeFeed}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/auth-proof" component={AuthProof}/>
    <Route path="/searchResults" component={HomeFeed}/>
    <Route path="/profile/:username" component={Profile}/>
    <Route path="/new" component={Newpost}/>
  </Route>
);
