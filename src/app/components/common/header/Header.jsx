import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.user.user && !nextProps.user.user) { //logout (had user(this.props.user.user) but no loger the case (!nextProps.user.user))
    //   this.context.router.push('/');
    // }
  }

  renderTopLinks() {
    // console.log("PROPS");
    // console.log(this.props);
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/new-story">New post</Link>
          </li>
          <li>
            <Link to="/home">Log out</Link>
          </li>
        </ul>
      );
    }
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    );
  }
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
                {this.renderTopLinks()}
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }

}
