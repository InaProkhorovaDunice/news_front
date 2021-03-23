import { createActions } from 'redux-actions';

import {
  REQUEST_SIGN_UP,
  REQUEST_SIGN_UP_FAILED,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
} from '../constants';

export const {
  requestSignUp,
  requestSignUpFailed,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailed,
} = createActions(
  REQUEST_SIGN_UP,
  REQUEST_SIGN_UP_FAILED,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
);
