import React, { Component } from 'react';
import ArticleListContainer from '../../containers/ArticleListContainer';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class TagView extends Component {
  render() {
    const tag = this.props.params.id;
    const followee = { id: tag, type: 'tag' };
    return (
      <div className="main main-container tag-view">
        <h3>Articles tagged {tag}  <FollowButtonContainer followee={followee}/></h3>
        <div className="header-line"></div>
        <ArticleListContainer filters={{tag: tag}}/>
      </div>
    );
  }

}
