import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: Actually fill this in lol. Dispatch actions on load, etc.

export default class ArticleView extends Component {
  render() {
    const id = this.props.params.id;
    return(
      <div className="main-container">
        Article id: {id}
      </div>
    )
  }

}
