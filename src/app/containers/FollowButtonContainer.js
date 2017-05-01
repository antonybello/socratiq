import { connect } from 'react-redux'
import * as followActions from '../actions/followActions';
import FollowButton from '../components/followButton/FollowButton';

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid, followee, token) => {
      return new Promise (() => {
           let response = dispatch(followActions.follow(userid, followee, token));
           response.payload.then((payload) =>  {
               if (payload.status == 201){
                   dispatch(followActions.followSuccess());
               } else {
                   dispatch(followActions.followFailure(payload));
               }
           }).catch((error) => {
               if (error.response.status == 409) {
                 dispatch(followActions.followFailure(payload));
               } else {
                 alert("Server error");
                 dispatch(followActions.followFailure(payload));
               }
           });
       });
    },
    unfollow: (userid, followee, token) => {
      return new Promise (() => {
           let response = dispatch(followActions.unfollow(userid, followee, token));
           response.payload.then((payload) =>  {
               if (payload.status == 204){
                   dispatch(followActions.unfollowSuccess());
               } else {
                   dispatch(followActions.unfollowFailure(payload));
               }
           }).catch((error) => {
               if (error.response.status == 404) {
                 console.log(userid + " does not follow " + followee.id);
                 dispatch(followActions.unfollowFailure(payload));
               } else {
                 alert("Server error");
                 dispatch(followActions.unfollowFailure(payload));
               }
           });
       });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
