import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    let followed = props.followee.followed;
    if (props.authenticatedUser.userid) {
      if (props.followee.type == 'tag') {
        followed = props.authenticatedUser.tagsFollowing.includes(props.followee.id);
      } else if (props.followee.type == 'user') {
        followed = props.authenticatedUser.usersFollowing.includes(props.followee.id);
      }
    } 
    this.state = {
      followed: followed
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticatedUser.userid) {
      let followed;
      if (nextProps.followee.type == 'tag') {
        followed = nextProps.authenticatedUser.tagsFollowing.includes(nextProps.followee.id);
      } else if (nextProps.followee.type == 'user') {
        followed = nextProps.authenticatedUser.usersFollowing.includes(nextProps.followee.id);
      }
      this.setState({
        followed: followed
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
    const { type, id } = this.props.followee;
    const { userid } = this.props.authenticatedUser;
    if (!userid || (type == 'user' && id == userid)) {
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
