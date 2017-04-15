import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import Home from '../components/home/Home'
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
// import {requireAuthentication} from '../components/AuthenticatedComponent';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>;
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
  </Route>
);
