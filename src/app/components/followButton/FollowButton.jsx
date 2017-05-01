import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    let followed = props.followee.followed;
    if (props.authenticatedUser.userid && props.followee.type == 'tag') {
      followed = props.authenticatedUser.tagsFollowing.includes(props.followee.id);
    }
    this.state = {
      followed: followed
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticatedUser.userid && nextProps.followee.type == 'tag') {
      this.setState({
        followed: nextProps.authenticatedUser.tagsFollowing.includes(nextProps.followee.id)
      }); 
    }  
  }

  handleClick() {
    this.toggleFollow();
    this.setState({
      followed: !this.state.followed
    });
  }

  toggleFollow() {
    const { followee } = this.props;
    const { userid, token } = this.props.authenticatedUser;
    this.state.followed ? this.props.unfollow(userid, followee, token ) 
                        : this.props.follow(userid, followee, token );
  }

  render() {
    const { type } = this.props.followee;
    if (!this.props.authenticatedUser.userid) {
      return null;
    }
    return (
      <Link>
        <span onClick={this.handleClick.bind(this)} className={`${this.state.followed ? 'unfollow' : 'follow'}`}>
          { type == 'user' ? 
            ( this.state.followed ? 'Unfollow' : 'Follow' ) :
            ( this.state.followed ? 'Unfollow Tag' : 'Follow Tag')
          }
        </span>
      </Link>
    );
  }
}
