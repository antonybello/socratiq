import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tagbar extends Component {
  render() {
    return (
        <nav className="navbar tag-nav navbar-default">
          <div className="container">
            <ul className="nav navbar-nav navbar-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/searchResults">Academic</Link></li>
                <li><Link to="/searchResults">Social</Link></li>
                <li><Link to="/searchResults">Politics</Link></li>
                <li><Link to="/searchResults">Election</Link></li>
              </ul>
            </div>
        </nav>
    )
  }
}
