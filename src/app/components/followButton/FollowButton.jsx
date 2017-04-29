import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: props.followed
    };
  }

  handleClick() {
    this.toggleFollow();
    this.setState({
      followed: !this.state.followed
    });
  }

  toggleFollow() {
    const { userid, authorid, token } = this.props;
    this.state.followed ? this.props.unfollow(userid, authorid, token) : this.props.follow(userid, authorid, token);
  }

  render() {
    return (
      <Link>
        <span onClick={this.handleClick.bind(this)} className={`${this.state.followed ? 'unfollow' : 'follow'}`}>
          {this.state.followed ? 'Unfollow' : 'Follow'}
        </span>
      </Link>
    );
  }
}
