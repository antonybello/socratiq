import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

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
    const { isAuthenticated, userid, token, author } = this.props;
    if (isAuthenticated) {
      if (userid !== author.userid) {
        return (
          <FollowButtonContainer followed={author.followed} userid={userid} authorid={author.userid} token={token} />
        );
      }
    }
  }

  render() {
    const { author, id, title, date, snippet, tags, suppressFollowButton } = this.props;
    return(
      <div className="container card">
        <Link to={`/article/${id}`}><h4>{title}</h4></Link>
        <h5>
          <Link to={`/profile/${author.userid}`}>{author.name}</Link>
          { (!suppressFollowButton) && this.renderFollowButton()}
        </h5>
        <h6>{author.institution}</h6>
        <h6>{date}</h6>
        <p>{snippet}</p>
        <span className="read-more"><Link to={`/article/${id}`}>Read more...</Link></span>
        <ul className="tags list-inline">
          Tags: {this.renderTags(tags)}
        </ul>
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
