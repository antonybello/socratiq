import React, { Component } from 'react';
import { Link } from 'react-router';
import PaneSelectorContainer from '../../containers/PaneSelectorContainer';
import SearchHeader from './SearchHeader'
import { ArticleList, AuthorList, TagList } from '../common/lists';

export default class SearchResults extends Component {

  render() {
    // let { loading, institution, name, followed, tagsFollowed, usersFollowed } = from props;
    // if (loading) {
    //   return <div><h3>Loading...</h3></div>
    // }
    return (
      <div className="search-results">
        <SearchHeader />
        <PaneSelectorContainer initiallySelected='Articles'>
          <div name='Articles'>
            <h3>Articles titled </h3>
            <div className="header-line"></div>
          </div>
          <div name='Authors'>
            <h3>Authors named </h3>
            <div className="header-line"></div>
          </div>
          <div name='Tags'>
            <h3>Tags matching </h3>
            <div className="header-line"></div>
          </div>
        </PaneSelectorContainer>
      </div>
    );
  }

}
