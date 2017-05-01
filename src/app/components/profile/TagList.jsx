import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TagList extends Component {
  render() {
    return (
      <div>
        { 
          this.props.tags.map((t, i) => 
            <li key={i}><Link to={`/tag/${t}`}>{t}</Link></li> 
          )
        }
      </div>
    );
  }
}
