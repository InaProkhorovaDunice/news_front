import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { apiUrl } from '../../config';
import { REQUEST_SIGNUP, REQUEST_LOGIN } from '../constants/index';
import {
  requestSignUpSuccess,
  requestSignUpFailed,
  requestLoginSuccess,
  requestLoginFailed,
} from '../actions/authActions';

function* requestSignUp(action) {
  debugger;
  try {
    yield call(axios.post, `${apiUrl}/auth`, action.payload, {
      headers: { access: '*/*', 'Content-Type': 'application/json' },
    });
    yield put(requestSignUpSuccess(action.payload.email));
  } catch (error) {}
}

function* requestLogin(action) {
  debugger;
  try {
    const data = yield call(axios.post, `${apiUrl}/auth/sign_in`, action.payload, {
      headers: { access: '*/*', 'Content-Type': 'application/json' },
    });
    yield put(requestLoginSuccess(data.data));
  } catch (error) {}
}

export default function* createAuthWatcher() {
  yield takeEvery(REQUEST_SIGNUP, requestSignUp);
  yield takeEvery(REQUEST_LOGIN, requestLogin);
}
