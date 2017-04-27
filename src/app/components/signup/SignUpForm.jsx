import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
import renderField from '../common/base/renderField';
import { schools } from '../../constants/schools';
import { signUpUser, signUpUserSuccess, signUpUserFailure, } from '../../actions/userActions';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.name || values.name.trim() === '') {
    errors.name = 'enter a name';
    hasErrors = true;
  }
  if (!values.username || values.username.trim() === '') {
    errors.username = 'enter username';
    hasErrors = true;
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'enter email';
    hasErrors = true;
  }
  const school = values.school;
  if (!school || (school && typeof school === 'string' && schools.indexOf(school) == -1))  {
    errors.school = 'enter a valid school';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'enter password';
    hasErrors = true;
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'confirm password';
    hasErrors = true;
  }

  if (values.confirmPassword && values.confirmPassword.trim() !== '' && values.password && values.password.trim() !== '' && values.password !== values.confirmPassword) {
    errors.password = 'Passwords don\'t match';
    errors.password = 'Passwords don\'t match';
    hasErrors = true;
  }
  return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const validateAndSignUpUser = (values, dispatch) => {
  return new Promise ((resolve, reject) => {
       let response = dispatch(signUpUser(values));
       response.payload.then((payload) =>  {
           if (payload.status == 201){
               dispatch(signUpUserSuccess(payload, values.userid));
               resolve();
           } else {
               dispatch(signUpUserFailure(payload));
               reject(payload.data);
           }
       }).catch((error) => {
           if (error.response.status == 409) {
             alert("Username already exists, please try a new one.");
             dispatch(signUpUserFailure(payload));
             reject(payload.data);
           } else {
             alert("Server error, try again.");
             dispatch(signUpUserFailure(payload));
             reject(payload.data);
           }

       });
   });
};

class SignUpForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated') {
      this.context.router.push('/auth-proof');
    }
  }

  render() {
    const {handleSubmit, submitting, validate} = this.props;
    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit(validateAndSignUpUser) }>
          <Field
                 autoFocus="autoFocus"
                 name="name"
                 type="text"
                 component={ renderField }
                 label="full name" />
          <Field
                 name="username"
                 type="text"
                 component={ renderField }
                 label="username" />
          <Field
                 name="school"
                 type="text"
                 typeahead="typeahead"
                 component={ renderField }
                 options={schools}
                 label="choose a school..." />
          <Field
                 name="email"
                 type="email"
                 component={ renderField }
                 label="email"/>
          <Field
                 name="password"
                 type="password"
                 component={ renderField }
                 label="password" />
          <Field
                 name="confirmPassword"
                 type="password"
                 component={ renderField }
                 label="confirm" />
          <div>
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ submitting }>
              Register
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
  form: 'SignUpForm',
  validate
})(SignUpForm)
