import React, { Component } from 'react';
import ArticleListContainer from '../../containers/ArticleListContainer';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class TagView extends Component {

  render() {
    return (
      <div className="main main-container">
        <h3>Articles about {this.props.params.id}</h3>
        <div className="header-line"></div>
        <ArticleListContainer filters={{tag: this.props.params.id}}/>
      </div>
    );
  }

}
