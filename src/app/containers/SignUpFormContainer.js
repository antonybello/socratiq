import SignUpForm from '../components/signup/SignUpForm';
import { resetSignUpUser } from '../actions/userActions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    resetSignUp: () => {
      dispatch(resetSignUpUser());
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    validateFields: state.validateFields
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
