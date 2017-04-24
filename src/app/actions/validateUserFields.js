import axios from 'axios';

import { VALIDATE_USER_FIELDS, VALIDATE_USER_FIELDS_SUCCESS, VALIDATE_USER_FIELDS_FAILURE, RESET_VALIDATE_USER_FIELDS } from '../constants/AppConstants'

const ROOT_URL = 'https://socratiq-app.appspot.com/users'

export function validateUserFields(values) {
  const request = axios.put(`${ROOT_URL}/users/validate/fields`, values);

  return {
    type: VALIDATE_USER_FIELDS,
    payload: request
  };
}

export function validateUserFieldsSuccess() {
  return {
    type: VALIDATE_USER_FIELDS_SUCCESS
  };
}

export function validateUserFieldsFailure(error) {
  return {
    type: VALIDATE_USER_FIELDS_FAILURE,
    payload: error
  };
}

export function resetValidateUserFields() {
  return {
    type: RESET_VALIDATE_USER_FIELDS
  }
};
