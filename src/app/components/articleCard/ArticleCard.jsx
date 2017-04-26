import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ArticleCard extends Component {
  render() {
    const { article_id, author_id, author, title,  date, snippet, followed } = this.props;
    return(
      <div className="container card">
        <h4>{title}</h4>
        <h5>{author}</h5>
        <h6> Pomona College </h6>
        <h6>{date}</h6>
        <p>{snippet}</p>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  article_id: PropTypes.string.isRequired,
  author_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  snippet: PropTypes.string,
  followed: PropTypes.bool,
}
