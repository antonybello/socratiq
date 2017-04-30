import React, { Component } from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../../containers/FollowButtonContainer';
import PropTypes from 'prop-types';

export default class AuthorList extends Component {

  renderFollowButton(author) {
    const { status, userid, token } = this.props.authenticatedUser;
    if (status == 'authenticated') {
      if (userid !== author.userid) {
        return (
          <FollowButtonContainer followed={author.followed} userid={userid} authorid={author.userid} token={token} />
        );
      }
    }
  }

  render() {
    return (
      <div>
        { 
          this.props.authors.map((a, i) => {
            return (
              <div key={i}>
                <li>
                  <Link to={`/profile/${a.userid}`}>{a.name}</Link>
                  { this.renderFollowButton(a) }
                </li>
              </div>
            );
          })
        }
      </div>
    );
  }

}
