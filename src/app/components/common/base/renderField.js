import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Typeahead} from 'react-bootstrap-typeahead';

const renderField = ({ input, label, type, typeahead, className, typeAheadOptions, autoFocus, meta: { touched, error, invalid, warning } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <div>
      {typeahead ? (<Typeahead {...input} {...typeAheadOptions} placeholder={label}  />)
         : (<input {...input} autoFocus={autoFocus} className={`form-control ${className}`}  placeholder={label} type={type}/>)}
       <div className="help-block">
         {touched && ((error && <span className="fade-in">{error}</span>) || (warning && <span className="fade-in">{warning}</span>))}
      </div>
    </div>
  </div>
);

export default renderField;
