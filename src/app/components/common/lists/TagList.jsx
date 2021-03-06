import React, { Component } from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../../../containers/FollowButtonContainer';

export default class TagList extends Component {

  renderTags(tags) {
    return tags.map((t, i) => {
      return (
        <div key={i}>
          <li className="author-item">
            <Link className="name" to={`/tag/${t.tag}`}>{t.tag}</Link>
            <FollowButtonContainer followee={{ id: t.tag, type: 'tag' }} />
          </li>
        </div>
      );
    });
  }

  render() {
    if (this.props.tags === null) {
      return null;
    }
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
