import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FollowButton from '../followButton/FollowButton';

// TODO: Add dispatcher and actions to the follow onClick Link
//       We could make the follow button a component with state
//       depending on whether or not we follow the rendered author

// TODO: Change the text of the button, but send a request in background
//       so we don't need to wait on db for UI update.

// TODO: Potentially add another field allowing for toggle of text..? 

export default class ArticleCard extends Component {
  renderTags(tags) {
    return tags.map((t, i) => {
      return (
        <li key={i} className="tag"><Link to={`/tag/${t}`}>{t}</Link></li>
      )
    });
  }

  renderFollowButton() {
    const { isAuthenticated, userid, author } = this.props;
    if (isAuthenticated) {
      if (userid !== author.userid) {
          return (
            <FollowButton followed={author.followed} onClick={this.handleFollow} />
          );
      }
    }
  }

  render() {
    const { author, id, title, date, snippet, tags } = this.props;
    return(
      <div className="container card">
        <Link to={`article/${id}`}><h4>{title}</h4></Link>
        <h5>{author.name} {this.renderFollowButton()}</h5>
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
