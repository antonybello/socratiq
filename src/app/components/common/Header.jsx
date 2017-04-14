import React, { Component } from 'react';
import { Link } from 'react-router';
 
function Header () {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header">
                  <Link className="navbar-brand" to="/">Socratiq</Link>
              </div>
              <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/login">Login</Link></li>
              </ul>
          </div>
      </nav>
    </div>
  )
}

export default Header;
