import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tagbar extends Component {
  render() {
    return (
        <nav className="navbar tag-nav navbar-default">
          <div className="container">
            <ul className="nav navbar-nav navbar-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tag/Academics">Academic</Link></li>
                <li><Link to="/tag/Social">Social</Link></li>
                <li><Link to="/tag/Politics">Politics</Link></li>
                <li><Link to="/tag/Election">Election</Link></li>
              </ul>
            </div>
        </nav>
    )
  }
}
