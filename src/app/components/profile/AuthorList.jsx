import React, { Component } from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../../containers/FollowButtonContainer';
import PropTypes from 'prop-types';

export default class AuthorList extends Component {

  renderFollowButton(author) {
    const { status, userid, token } = this.props.authenticatedUser;
    const followee = { id: author.userid, followed: author.followed, type: 'user' };
    if (status == 'authenticated') {
      if (userid !== author.userid) {
        return (
          <FollowButtonContainer followee={followee} userid={userid} token={token} />
        );
      }
    }
  }

  render() {
    return (
      <div className="white-bg">
        <ul className="list-unstyled author-list">
          {
            this.props.authors.map((a, i) => {
              return (
                <div key={i}>
                  <li className="author-item">
                    <Link className="name" to={`/profile/${a.userid}`}>{a.name}</Link>
                    { this.renderFollowButton(a) }
                  </li>
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }

}
