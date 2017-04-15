import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="main-bg">
        <div className="container">
          <div className="nav-container">
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Socratiq</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
