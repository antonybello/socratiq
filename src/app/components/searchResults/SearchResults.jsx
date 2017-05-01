import React, { Component } from 'react';
import { Link } from 'react-router';
import PaneSelectorContainer from '../../containers/PaneSelectorContainer';
import SearchHeader from './SearchHeader'
import ArticleListContainer from '../../containers/ArticleListContainer';
import { AuthorList, TagList } from '../common/lists';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {searchQuery : null};
  }

  handleSubmit(input) {
    this.setState({
      searchQuery: input.query
    });
  }

  render() {
    const query = this.state.searchQuery;
    return (
      <div className="search-results main">
        <SearchHeader onSubmit={this.handleSubmit.bind(this)} />
        {query && <PaneSelectorContainer initiallySelected='Articles'>
          <div name='Articles'>
            <h3>Articles matching {query}</h3>
            <div className="header-line"></div>
            <ArticleListContainer suppressFollowButton={true} query={query} filters={{ search_query: query }}/>
          </div>
          <div name='Authors'>
            <h3>Authors named {query}</h3>
            <div className="header-line"></div>
          </div>
          <div name='Tags'>
            <h3>Tags matching {query}</h3>
            <div className="header-line"></div>
          </div>
        </PaneSelectorContainer>}
      </div>
    );
  }

}
