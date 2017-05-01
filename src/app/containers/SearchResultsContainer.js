import SearchResults from '../components/searchResults/SearchResults';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, fetchProfileSuccess } from '../actions/profileActions';

const mapStateToProps = (state) => {
  return {
    authenticatedUser: state.user,
    profile: state.profile
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    profileid: ownProps.profileid,
    fetchProfile: (profileid, token) => {
      return new Promise (() => {
        let response = dispatch(fetchProfile(profileid, token));
        response.payload.then((payload) => {
          dispatch(fetchProfileSuccess(payload));
        });
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
