import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from '../common/base/renderField';

class SearchHeader extends Component {
  render() {
    const {handleSubmit, submitting, validate, token, newArticle } = this.props;
    return (
      <div className="profile-header white-bg">
        <div className='form-container'>
          <form onSubmit={handleSubmit((values,dispatch)=>{post(values, token, dispatch);})}>
            <Field
                   autoFocus="autoFocus"
                   name="input"
                   type="text"
                   className="search"
                   component={ renderField }
                   label="search" />
           <button
                   type="submit"
                   className="btn btn-primary"
                   disabled={ submitting }>
             Search
           </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (input) => {
  let errors = {};
  if (!input) {
    errors.input = 'enter a keyword';
  }
  return errors;
};

export default reduxForm({
  form: 'SearchHeader',
  validate
})(SearchHeader);
