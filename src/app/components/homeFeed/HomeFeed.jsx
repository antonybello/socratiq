import React, { Component } from 'react';
import ArticleListContainer from '../../containers/ArticleListContainer';
// TODO: Add filter box
// import FilterBoxContainer from '../../containers/FilterBoxContainer';

export default class HomeFeed extends Component {
  render() {
    return (
      <div className="main-container main">
        <ArticleListContainer filters={{ personalized: true }}/>
      </div>
    );
  }
}
