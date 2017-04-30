import React, { Component, PropTypes } from 'react';


const renderField = ({ input, label, className, type, meta: { touched, error, invalid, warning } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <div>
      <textarea {...input} className={`form-control ${className}`}  placeholder={label} type={type}/>
       <div className="help-block">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
)

export default renderField;
