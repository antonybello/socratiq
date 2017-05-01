import { connect } from 'react-redux'
import AuthorList from '../components/common/lists/AuthorList'
import { searchAuthors, searchAuthorsSuccess } from '../actions/searchActions';

const mapStateToProps = (state) => {
  return { 
    authors: state.searchResults.authors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAuthors: () => { return new Promise(() => {
      let response = dispatch(searchAuthors(ownProps.query));
      response.payload.then((payload) => {
        dispatch(searchAuthorsSuccess(payload));
      });
    })}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
