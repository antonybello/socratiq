import React, { Component } from 'react';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class ProfilePageHeader extends Component {
  render() {
    return (
      <div className="profile-header white-bg">
        <h3>
          {this.props.name} 
          <FollowButtonContainer followee={{ id: this.props.profileid, type: 'user' }} />
        </h3>
        <h5>{this.props.institution}</h5>
      </div>
    )
  }
}
