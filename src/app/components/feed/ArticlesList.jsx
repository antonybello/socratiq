import React, { Component } from 'react';
import ArticlesListContainer from '../../containers/ArticlesListContainer';
// TODO: Add filter box
// import FilterBoxContainer from '../../containers/FilterBoxContainer';


export default class ArticlesList extends Component {
  render() {
    return (
      <div>
        <ArticlesListContainer />
      </div>
    );
  }
}
