import LoginForm from '../components/login/LoginForm';
import { resetSignInUser } from '../actions/userActions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    resetSignIn: () => {
      dispatch(resetSignInUser());
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    validateFields: state.validateFields,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
