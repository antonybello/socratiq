import React, { Component } from 'react';
import ArticleViewBoxContainer from '../../containers/ArticleViewBoxContainer';

export default class ArticleView extends Component {
  render() {
    return (
      <div className="article main">
        <ArticleViewBoxContainer id={this.props.params.id}/>
      </div>
    );
  }
}
