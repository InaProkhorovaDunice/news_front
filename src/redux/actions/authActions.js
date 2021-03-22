import { createActions } from 'redux-actions';

import {
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILED,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
} from '../constants';

export const { requestSignUp, requestSignUpSuccess, requestSignUpFailed } = createActions(
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILED,
);

export const { requestLogin, requestLoginSuccess, requestLoginFailed } = createActions(
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
);
