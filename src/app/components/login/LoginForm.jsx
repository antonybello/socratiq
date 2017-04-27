import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
import renderField from '../common/base/renderField';
import { schools } from '../../constants/schools';
// import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';
import { signInUser, signInUserSuccess, signInUserFailure, } from '../../actions/userActions';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;

  if (!values.username || values.username.trim() === '') {
    errors.username = 'enter username';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'enter password';
    hasErrors = true;
  }

  return hasErrors && errors;
}

// // //For instant async server validation
// const asyncValidate = (values, dispatch) => {
//   return dispatch(validateUserFields(values))
//     .then((result) => {
//       //Note: Error's "data" is in result.payload.response.data
//       // success's "data" is in result.payload.data
//       if (!result.payload.response) { //1st onblur
//         return;
//       }
//
//       let {data, status} = result.payload.response;
//
//       //if status is not 200 or any one of the fields exist, then there is a field error
//       if (status != 200 || data.username || data.email) {
//         //let other components know of error by updating the redux` state
//         dispatch(validateUserFieldsFailure(data));
//         throw data;
//       } else {
//         //let other components know that everything is fine by updating the redux` state
//         dispatch(validateUserFieldsSuccess(data)); //ps: this is same as dispatching RESET_USER_FIELDS
//       }
//     });
// };
//


//For any field errors upon submission (i.e. not instant check)
const validateAndLoginUser = (values, dispatch) => {
  return new Promise ((resolve, reject) => {
       let response = dispatch(signInUser(values));
       console.log("response:");
       console.log(response);
       response.payload.then((payload) =>  {
           if (payload.status == 204){
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
    //always reset that global state back to null when you REMOUNT
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
  form: 'LoginForm', // a unique identifier for this form
  validate // validation function given to redux-form
    // asyncValidate
})(LoginForm)
