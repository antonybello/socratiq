import React, { Component } from 'react';
import ArticleListContainer from '../../containers/ArticleListContainer';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class TagView extends Component {

  render() {
    const tag = this.props.params.id;
    const followee = { id: tag, type: 'tag' };
    return (
      <div className="main main-container">
        <h3>Articles tagged {tag}</h3>
        <FollowButtonContainer followee={followee}/>
        <div className="header-line"></div>
        <ArticleListContainer filters={{tag: tag}}/>
      </div>
    );
  }

}
