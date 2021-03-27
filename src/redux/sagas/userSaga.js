import { takeEvery } from 'redux-saga/effects';
import { LOAD_USERS, LOAD_USER_INFO } from '../constants/index';
import { getLocalStorageItem } from '../../hooks/useLocalStorage';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { apiUrl } from '../../config';

import {
  loadUserInfoSuccess,
  loadUserInfoFailed,
  loadUsersSuccess,
  loadUsersFailed,
} from '../actions/userActions';

function* loadUsers(action) {
  const accessToken = getLocalStorageItem('access-token');
  const uid = getLocalStorageItem('uid');
  const client = getLocalStorageItem('client');
  try {
    const response = yield call(axios.get, `${apiUrl}/users?${action.payload.params}`, {
      headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'access-token': accessToken,
        uid: uid,
        client: client,
      },
    });
    yield put(loadUsersSuccess(response.data));
  } catch (error) {
    yield put(loadUsersFailed(error));
  }
}

function* loadUserInfo(action) {
  const accessToken = getLocalStorageItem('access-token');
  const uid = getLocalStorageItem('uid');
  const client = getLocalStorageItem('client');
  try {
    const response = yield call(axios.get, `${apiUrl}/users/${action.id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'access-token': accessToken,
        uid: uid,
        client: client,
      },
    });
    yield put(loadUserInfoSuccess(response.data));
  } catch (error) {
    yield put(loadUserInfoFailed(error));
  }
}

export default function* createUserWatcher() {
  yield takeEvery(LOAD_USERS, loadUsers);
  yield takeEvery(LOAD_USER_INFO, loadUserInfo);
}
