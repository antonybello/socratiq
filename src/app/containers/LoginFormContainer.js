import LoginForm from '../components/login/LoginForm';
import { resetValidateUserFields } from '../actions/validateUserFields';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetValidateUserFields());
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
