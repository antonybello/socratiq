import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const followed = this.props.followed;
    return (
      <Link>
        <span onClick={this.props.handleFollow} className={`${followed ? 'unfollow' : 'follow'}`}>
          {followed ? 'Unfollow' : 'Follow'}
        </span>
      </Link>
    )
  }
}
