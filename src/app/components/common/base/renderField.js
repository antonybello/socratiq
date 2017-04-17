import React, { Component } from 'react';
import PropTypes from 'prop-types';

const renderField = ({ input, label, type, autoFocus, meta: { touched, error, invalid, warning } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <div>
      <input {...input} autoFocus={autoFocus} className="form-control"  placeholder={label} type={type}/>
       <div className="help-block">
         {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
)

export default renderField;
