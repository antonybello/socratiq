import React, { Component } from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../../../containers/FollowButtonContainer';
import PropTypes from 'prop-types';

export default class AuthorList extends Component {

  renderAuthors(authors) {
    return authors.map((a, i) => {
        return (
          <div key={i}>
            <li className="author-item" key={i}> 
              <Link className="name" to={`/profile/${a.userid}`}>{a.name} </Link>
              <span className="institution">{a.institution}</span>
              <FollowButtonContainer key={i} followee={{id: a.userid, type: 'user'}}/>
            </li>
          </div>
        );
      })
  }

  render() {
    if (this.props.authors.length === 0) {
      return <div><h5>No authors found.</h5></div>;
    }
    return (
      <div className="white-bg">
        <ul className="list-unstyled tag-author-list">
          {this.renderAuthors(this.props.authors)}
        </ul>
      </div>
    );
  }

}
