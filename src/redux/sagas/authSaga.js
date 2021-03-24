import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { apiUrl } from '../../config';
import { REQUEST_SIGN_UP, REQUEST_SIGN_IN, REQUEST_SIGN_OUT } from '../constants/index';
import {
  requestSignInSuccess,
  requestSignInFailed,
  requestSignOutSuccess,
  requestSignOutFailed,
} from '../actions/authActions';
import { getLocalStorageItem } from '../../hooks/useLocalStorage';

function* requestSignUp(action) {
  try {
    const data = yield call(axios.post, `${apiUrl}/auth`, action.payload, {
      headers: { 'Access-Control-Allow-Origin': '*/*', 'Content-Type': 'application/json' },
    });
    yield put(requestSignInSuccess(data));
  } catch (error) {
    yield put(requestSignInFailed(error));
  }
}

function* requestSignIn(action) {
  try {
    const data = yield call(axios.post, `${apiUrl}/auth/sign_in`, action.payload, {
      headers: { 'Access-Control-Allow-Origin': '*/*', 'Content-Type': 'application/json' },
    });
    yield put(requestSignInSuccess(data));
  } catch (error) {
    if (error.response) {
      yield put(requestSignInFailed(error.response));
    }
  }
}

function* requestSignOut(action) {
  const accessToken = getLocalStorageItem('access-token');
  const uid = getLocalStorageItem('uid');
  const client = getLocalStorageItem('client');

  try {
    yield call(axios.delete, `${apiUrl}/auth/sign_out`, {
      headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'access-token': accessToken,
        uid: uid,
        client: client,
      },
    });
    yield put(requestSignOutSuccess());
  } catch (error) {
    yield put(requestSignOutFailed(error));
  }
}

export default function* createAuthWatcher() {
  yield takeEvery(REQUEST_SIGN_UP, requestSignUp);
  yield takeEvery(REQUEST_SIGN_IN, requestSignIn);
  yield takeEvery(REQUEST_SIGN_OUT, requestSignOut);
}
