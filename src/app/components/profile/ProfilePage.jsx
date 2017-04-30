import React, { Component } from 'react';
import ProfilePageContainer from '../../containers/ProfilePageContainer';

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <ProfilePageContainer profileid={this.props.params.id}/>
      </div>
    );
  }
}
