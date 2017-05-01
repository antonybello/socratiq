import TagView from '../components/tagView/TagView';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {};
}

function mapStateToProps(state, ownProps) {
  return {
    authenticatedUser: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagView);
