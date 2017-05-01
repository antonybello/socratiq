import React, { Component } from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../../../containers/FollowButtonContainer';

export default class TagList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tagsFollowing: props.authenticatedUser.tagsFollowing
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tagsFollowing: nextProps.authenticatedUser.tagsFollowing
    });
  }

  renderFollowButton(tag) {
    const { status, userid, token, tagsFollowing } = this.props.authenticatedUser;
    if (status == 'authenticated') {
      const following = tagsFollowing.includes(tag.tag);
      const followee = { id: tag.tag, followed: following, type: 'tag' };
      return (
        <FollowButtonContainer followee={followee} userid={userid} token={token} />
      );
    }
  }

  render() {
    return (
      <div className="white-bg">
        <ul className="list-unstyled author-list">
          {
            this.props.tags.map((t, i) => {
              return (
                <div key={i}>
                  <li className="author-item">
                    <Link className="name" to={`/tag/${t.tag}`}>{t.tag}</Link>
                    { this.renderFollowButton(t) }
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
