import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: Make article link to Article View page by adding <Link ... />
// TODO: Pass more proptypes to ArticleCard
// TODO: Add dispatcher and actions to the Link onClick handler

export default class ArticleCard extends Component {
  render() {
    const { author, title,  date, snippet } = this.props;
    return(
      <div className="container card">
        <h4>{title}</h4>
        <h5>{author.name}</h5>
        <h6>{author.institution}</h6>
        <h6>{date}</h6>
        <p>{snippet}</p>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  snippet: PropTypes.string,
}
