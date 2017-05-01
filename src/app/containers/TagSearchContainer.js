import { connect } from 'react-redux'
import TagList from '../components/common/lists/TagList'
import { searchTags, searchTagsSuccess } from '../actions/searchActions';

const mapStateToProps = (state) => {
  return { 
    tags: state.searchResults.tags
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
