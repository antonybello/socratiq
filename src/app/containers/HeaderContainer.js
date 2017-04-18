import Header from '../components/common/header/Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { logoutUser } from '../actions/users';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.status === 'authenticated',
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     logout: () => {
         dispatch(logoutUser());
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
