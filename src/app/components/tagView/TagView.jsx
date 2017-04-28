import React, { Component } from 'react';
import ArticlesListContainer from '../../containers/ArticlesListContainer';

export default class TagView extends Component {
  render() {
    return (
      <div className="main-container">
        <h3>Articles about {this.props.params.id}</h3>
        <div className="header-line"></div>
        <ArticlesListContainer tag={this.props.params.id}/>
      </div>
    );
  }
}
