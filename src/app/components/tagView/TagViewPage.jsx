import React, { Component } from 'react';
import TagViewContainer from '../../containers/TagViewContainer';

export default class TagViewPage extends Component {
  render() {
    return (
      <div>
        <TagViewContainer tag={this.props.params.id}/>
      </div>
    );
  }
}
