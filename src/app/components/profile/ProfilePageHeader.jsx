import React, { Component } from 'react';

export default class ProfilePageHeader extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.institution}</h2>
      </div>
    )
  }
}