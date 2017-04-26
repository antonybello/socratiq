import Profile from '../components/profile/Profile';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { logoutUser } from '../actions/users';

const mapStateToProps = (state) => {
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



export default connect(mapStateToProps, mapDispatchToProps)(Profile);
