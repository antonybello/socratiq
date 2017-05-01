import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: props.followee.followed
    };
  }

  handleClick() {
    this.toggleFollow();
    this.setState({
      followed: !this.state.followed
    });
  }

  toggleFollow() {
    const { userid, followee, token } = this.props;
    this.state.followed ? this.props.unfollow(userid, followee, token ) 
                        : this.props.follow(userid, followee, token );
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
