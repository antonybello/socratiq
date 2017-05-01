import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from '../common/base/renderField';

class SearchHeader extends Component {
  render() {
    const { handleSubmit, submitting, validate } = this.props;
    return (
      <div className="profile-header white-bg">
        <h4 className="search-title">Search Socratic for: </h4>
        <div className='form-container'>
          <form onSubmit={handleSubmit((q) => this.props.onSubmit(q))}>
            <Field
                   autoFocus="autoFocus"
                   name="query"
                   type="text"
                   className="search"
                   component={ renderField }
                   label="anything" />
          </form>
        </div>
      </div>
    );
  }
}

const validate = (input) => {
  let errors = {};
  var hasErrors = false;
  if (!input.query || input.query.trim() === '') {
    errors.input = 'enter a keyword';
    hasErrors = true;
  }
  return hasErrors && errors;
};

export default reduxForm({
  form: 'SearchHeader',
  validate
})(SearchHeader);
