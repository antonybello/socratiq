import React, { Component } from 'react';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class ProfilePageHeader extends Component {

  renderFollowButton(profileid, followed) {
    const { status, userid, token } = this.props.authenticatedUser;
    if (status == 'authenticated') {
      if (userid !== profileid) {
        return (
          <FollowButtonContainer followed={followed} userid={userid} authorid={profileid} token={token} />
        );
      }
    }
  }

  render() {
    return (
      <div className="profile-header white-bg">
        <h3>{this.props.name} { this.renderFollowButton(this.props.profileid, this.props.followed) } </h3>
        <h5>{this.props.institution}</h5>
      </div>
    )
  }
}
