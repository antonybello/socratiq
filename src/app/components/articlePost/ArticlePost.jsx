import React, { Component } from 'react';
import ArticlePostBoxContainer from '../../containers/ArticlePostBoxContainer';

export default class ArticlePost extends Component {
  render() {
    return (
      <div className="article white-bg">
        <ArticlePostBoxContainer />
      </div>
    );
  }
}
