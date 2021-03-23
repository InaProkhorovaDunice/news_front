import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { apiUrl } from '../../config';
import { REQUEST_SIGN_UP, REQUEST_LOGIN } from '../constants/index';
import {
  requestSignUpFailed,
  requestLoginSuccess,
  requestLoginFailed,
} from '../actions/authActions';

function* requestSignUp(action) {
  try {
    const data = yield call(axios.post, `${apiUrl}/auth`, action.payload, {
      headers: { 'Access-Control-Allow-Origin': '*/*', 'Content-Type': 'application/json' },
    });
    yield put(requestLoginSuccess(data));
  } catch (error) {}
}

function* requestLogin(action) {
  try {
    const data = yield call(axios.post, `${apiUrl}/auth/sign_in`, action.payload, {
      headers: { 'Access-Control-Allow-Origin': '*/*', 'Content-Type': 'application/json' },
    });
    yield put(requestLoginSuccess(data));
  } catch (error) {}
}

export default function* createAuthWatcher() {
  yield takeEvery(REQUEST_SIGN_UP, requestSignUp);
  yield takeEvery(REQUEST_LOGIN, requestLogin);
}
