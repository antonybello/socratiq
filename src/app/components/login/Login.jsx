import React, {Component} from 'react';
import LoginFormContainer from '../../containers/LoginFormContainer';

export default class Login extends Component {
  render() {
    return (
      <div className="login main">
        <h3 className="page-title">Login</h3>
        <LoginFormContainer />
      </div>
    );
  }
}
