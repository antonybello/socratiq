import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as userActions from '../../actions/userActions';

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: props.followed
    };
  }

  handleClick() {
    this.toggleFollow();
    this.setState({
      followed: !this.state.followed
    });
  }

  toggleFollow() {
    const { userid, authorid, token } = this.props;
    this.state.followed ? unfollow(userid, authorid, token) : follow(userid, authorid, token);
  }

  render() {
    return (
      <Link>
        <span onClick={this.handleClick.bind(this)} className={`${this.state.followed ? 'unfollow' : 'follow'}`}>
          {this.state.followed ? 'Unfollow' : 'Follow'}
        </span>
      </Link>
    );
  }
}

const follow = (userid, authorid, token, dispatch) => {
  return new Promise (() => {
       let response = dispatch(userActions.followUser(userid, authorid, token));
       response.payload.then((payload) =>  {
           if (payload.status == 201){
               dispatch(userActions.followUserSuccess());
           } else {
               dispatch(userActions.followUserFailure(payload));
           }
       }).catch((error) => {
           if (error.response.status == 409) {
             dispatch(userActions.followUserFailure(payload));
           } else {
             alert("Server error");
             dispatch(userActions.followUserFailure(payload));
           }
       });
   });
}

const unfollow = (userid, authorid, token, dispatch) => {
  return new Promise (() => {
       let response = dispatch(userActions.unfollowUser(userid, authorid, token));
       response.payload.then((payload) =>  {
           if (payload.status == 204){
               dispatch(userActions.unfollowUserSuccess());
           } else {
               dispatch(userActions.unfollowUserFailure(payload));
           }
       }).catch((error) => {
           if (error.response.status == 404) {
             console.log(userid + " does not follow " + authorid);
             dispatch(userActions.unfollowUserFailure(payload));
           } else {
             alert("Server error");
             dispatch(userActions.unfollowUserFailure(payload));
           }
       });
   });
}
