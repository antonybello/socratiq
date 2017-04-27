import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// TODO: Add dispatcher and actions to the article onClick Link
// TODO: Add dispatcher and actions to the follow onClick Link
//       We could make the follow button a component with state
//       depending on whether or not we follow the rendered author

export default class ArticleCard extends Component {
  renderTags(tags) {
    return tags.map((t, i) => {
      return (
        <li key={i} className="tag"><Link to="/">{t}</Link></li>
      )
    });
  }

  renderFollowButton() {
    return (
    <Link><span className="follow">Follow</span></Link>
    );
  }

  render() {
    const { author, id, title, date, snippet, tags } = this.props;
    return(
      <div className="container card">
        <Link to={`article/${id}`}><h4>{title}</h4></Link>
        <h5>{author.name} {!author.followed ? this.renderFollowButton() : ''}</h5>
        <h6>{author.institution}</h6>
        <h6>{date}</h6>
        <p>{snippet}</p>
        <ul className="tags list-inline">
          Tags: {this.renderTags(tags)}
        </ul>
        <span className="read-more"><Link to={`article/${id}`}>Read more...</Link></span>
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
  tags: PropTypes.array
}
