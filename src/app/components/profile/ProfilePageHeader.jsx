import React, { Component } from 'react';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class ProfilePageHeader extends Component {

  renderFollowButton(profileid, followed) {
    const { status, userid, token } = this.props.authenticatedUser;
    const followee = { id: profileid, followed: followed, type: 'user' };
    if (status == 'authenticated') {
      if (userid !== profileid) {
        return (
          <FollowButtonContainer followee={followee} userid={userid} token={token} />
        );
      }
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.institution}</h2>
        { this.renderFollowButton(this.props.profileid, this.props.followed) }
      </div>
    )
  }
}