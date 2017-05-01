import { connect } from 'react-redux'
import SearchResults from '../components/searchResults/SearchResults'
import { searchTags, searchTagsSuccess } from '../actions/searchActions';
import { searchAuthors, searchAuthorsSuccess } from '../actions/searchActions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTags: (query) => { return new Promise(() => {
      let response = dispatch(searchTags(query));
      response.payload.then((payload) => {
        dispatch(searchTagsSuccess(payload));
      });
    })},
    searchAuthors: (query) => { return new Promise(() => {
      let response = dispatch(searchAuthors(query));
      response.payload.then((payload) => {
        dispatch(searchAuthorsSuccess(payload));
      });
    })},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
