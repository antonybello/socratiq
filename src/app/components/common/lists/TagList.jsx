import React, { Component } from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../../../containers/FollowButtonContainer';

export default class TagList extends Component {

  renderFollowButton(tag) {
    const { status, userid, token } = this.props.authenticatedUser;
    const followee = { id: tag.tag, followed: tag.followed, type: 'tag' };
    if (status == 'authenticated') {
      return (
        <FollowButtonContainer followee={followee} userid={userid} token={token} />
      );
    }
  }

  renderTags(tags) {
    return tags.map((t, i) => {
      return (
        <div key={i}>
          <li className="author-item">
            <Link className="name" to={`/tag/${t.tag}`}>{t.tag}</Link>
            { this.renderFollowButton(t) }
          </li>
        </div>
      );
    });
  }

  render() {
    if (this.props.tags.length === 0) {
      return <div><h5>No tags found.</h5></div>;
    }
    return (
      <div className="white-bg">
        <ul className="list-unstyled tag-author-list">
          {this.renderTags(this.props.tags)}
        </ul>
      </div>
    );
  }

}
