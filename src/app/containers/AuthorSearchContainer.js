import { connect } from 'react-redux'
import AuthorList from '../components/common/lists/AuthorList'
import { searchAuthors, searchAuthorsSuccess } from '../actions/searchActions';

const mapStateToProps = (state) => {
  return { 
    authors: state.searchResults.authors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
