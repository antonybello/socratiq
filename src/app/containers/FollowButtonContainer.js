import { connect } from 'react-redux'
import * as userActions from '../actions/userActions';
import FollowButton from '../components/followButton/FollowButton';

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid, authorid, token) => {
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
    },
    unfollow: (userid, authorid, token) => {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
