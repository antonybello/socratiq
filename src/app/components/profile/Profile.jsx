import React, { Component } from 'react';
import ArticleListContainer from '../../containers/ArticleListContainer';
import ProfilePageHeader from './ProfilePageHeader';
import AuthorList from '../common/lists/AuthorList';
import TagList from '../common/lists/TagList';
import PaneSelectorContainer from '../../containers/PaneSelectorContainer'

export default class Profile extends Component {

  componentWillMount() {
    this.props.fetchProfile(this.props.profileid, this.props.authenticatedUser.token);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.profileid != nextProps.profileid) {
      this.props.fetchProfile(nextProps.profileid, nextProps.authenticatedUser.token);
    }
  }

  render() {
    let { loading, institution, name, followed, tagsFollowed, usersFollowed } = this.props.profile;
    let id = this.props.profileid;
    if (loading) {
      return <div><h3>Loading...</h3></div>
    }

    return (
      <div className="profile">
        <ProfilePageHeader
          name={name}
          profileid={id}
          followed={followed}
          institution={institution}
          authenticatedUser={this.props.authenticatedUser} />
        <PaneSelectorContainer initiallySelected='Articles'>
          <div name='Articles'>
            <h3>Articles posted by {this.props.profile.name}</h3>
            <div className="header-line"></div>
            <ArticleListContainer suppressFollowButton={true} filters={{ author: id }}/>
          </div>
          <div name='Authors'>
            <h3>Authors followed by {this.props.profile.name}</h3>
            <div className="header-line"></div>
            <AuthorList authors={usersFollowed} authenticatedUser={this.props.authenticatedUser}/>
          </div>
          <div name='Tags'>
            <h3>Tags followed by {this.props.profile.name}</h3>
            <div className="header-line"></div>
            <TagList tags={tagsFollowed} authenticatedUser={this.props.authenticatedUser}/>
          </div>
        </PaneSelectorContainer>
      </div>
    );
  }

}
