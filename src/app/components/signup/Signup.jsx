import React, {Component} from 'react';
import SignUpFormContainer from '../../containers/SignUpFormContainer';

export default class SignUp extends Component {
  render() {
    return (
      <div className="signup main main-container white-bg">
        <h3 className="page-title">Sign up</h3>
        <SignUpFormContainer />
      </div>
    );
  }
}
