import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from '../common/base/renderField';
import { signInUser, signInUserSuccess, signInUserFailure, } from '../../actions/userActions';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;

  if (!values.userid || values.userid.trim() === '') {
    errors.userid = 'enter username';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'enter password';
    hasErrors = true;
  }

  return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const validateAndLoginUser = (values, dispatch) => {
  return new Promise ((resolve, reject) => {
       let response = dispatch(signInUser(values));
       response.payload.then((payload) =>  {
           if (payload.status == 200){
               dispatch(signInUserSuccess(payload, values.userid));
               resolve();
           } else {
               dispatch(signInUserFailure(payload));
               reject(payload.data);
           }
       }).catch((error) => {
           if (error.response.status == 403) {
             alert("Username and password do not match. Try again.");
             dispatch(signInUserFailure(payload));
             reject(payload.data);
           } else {
             alert("Server error, try again.");
             dispatch(signInUserFailure(payload));
             reject(payload.data);
           }
       });
   });
};




class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated') {
      this.context.router.push('/');
    }
  }

  render() {
    const {handleSubmit, submitting, validate} = this.props;
    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit(validateAndLoginUser) }>
          <Field
                 name="userid"
                 type="text"
                 component={ renderField }
                 label="username" />
          <Field
                 name="password"
                 type="password"
                 component={ renderField }
                 label="password" />
          <div>
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ submitting }>
              Log In
            </button>
            <Link
                  to="/"
                  className="btn btn-error"> Cancel
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm)
