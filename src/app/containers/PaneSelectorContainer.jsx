import Profile from '../components/profile/Profile';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaneSelector from '../components/common/paneSelector/PaneSelector'
import { selectPane } from '../actions/paneSelectorActions';

const mapStateToProps = (state, ownProps) => {
  let paneComponents = React.Children.toArray(ownProps.children);
  let paneNames = paneComponents.map((p) => p.props.name);
  let selectedPane = state.paneSelector.selectedPane;
  return {  
    paneNames: paneNames,
    selectedPane: paneComponents.find((p) => p.props.name == selectedPane)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetSelectedPane: (pane) => dispatch(selectPane(ownProps.initiallySelected)),
    selectPane: (pane) => dispatch(selectPane(pane))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaneSelector);
