import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
import renderField from '../common/base/renderField';
import { schools } from '../../constants/schools';
import { schoolsMap } from '../../constants/schoolsMap'
import { signUpUser, signUpUserSuccess, signUpUserFailure } from '../../actions/userActions';

class SignUpForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
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
                 name="userid"
                 type="text"
                 component={ renderField }
                 label="username" />
          <Field
                 name="institution"
                 type="text"
                 typeahead="typeahead"
                 component={ renderField }
                 options={schools}
                 label="choose an institution..." />
          <Field
                 name="email"
                 type="email"
                 component={ renderField }
                 label="enter your institution email"/>
          <Field
                 name="password"
                 type="password"
                 component={ renderField }
                 label="password" />
          <Field
                 name="confirmPassword"
                 type="password"
                 component={ renderField }
                 label="confirm password" />
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

// Dispatches actions onSubmit and on result of registration attempt
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

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.name || values.name.trim() === '') {
    errors.name = 'enter a name';
    hasErrors = true;
  }
  if (!values.userid || values.userid.trim() === '') {
    errors.userid = 'enter username';
    hasErrors = true;
  }
  const email = values.email;
  if (!email || email.trim() === '') {
    errors.email = 'enter your institution email';
    hasErrors = true;
  }
  // Check if institution isn't valid
  const institution = cleanInstitution(values.institution);
  if (!institution || (institution && typeof institution === 'string' && schools.indexOf(institution) == -1))  {
    errors.institution = 'enter a valid institution';
    hasErrors = true;
  } else if (email) { // If institution valid, check if email is also entered
    if (schoolsMap.hasOwnProperty(institution)) { // If institution exists in dict
      const domain = schoolsMap[institution];
      if (!(email.endsWith('@' + domain) || email.endsWith('.' + domain))) { // Check valid domain
        errors.email = 'enter your valid institution email';
        hasErrors = true;
      }
    }
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

// Institution can get parsed as an array because of TypeAhead,
// so make sure we have a string
function cleanInstitution(formVal) {
  return typeof formVal === 'object' ? formVal[0] : formVal;
}

export default reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpForm)
