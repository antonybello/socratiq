import Profile from '../components/profile/Profile';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaneSelector from '../components/common/paneSelector/PaneSelector'
import { selectPane } from '../actions/paneSelectorActions';

const mapStateToProps = (state, ownProps) => {
  return {  
    selectedPane: state.paneSelector.selectedPane
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetSelectedPane: (pane) => dispatch(selectPane(ownProps.initiallySelected)),
    selectPane: (pane) => dispatch(selectPane(pane))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaneSelector);
