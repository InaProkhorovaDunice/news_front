import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_ALL_NEWS } from '../constants/index';
import { loadAllNewsSuccess, loadAllNewsFailed } from '../actions/newsActions';
import { getLocalStorageItem } from '../../hooks/useLocalStorage';
import axios from 'axios';
import { apiUrl } from '../../config';

function* loadAllNews() {
  const accessToken = getLocalStorageItem('access-token');
  const uid = getLocalStorageItem('uid');
  const client = getLocalStorageItem('client');
  try {
    const response = yield call(axios.get, `${apiUrl}/articles`, {
      headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'access-token': accessToken,
        uid: uid,
        client: client,
      },
    });
    yield put(loadAllNewsSuccess(response.data));
  } catch (error) {
    yield put(loadAllNewsFailed(error));
  }
}

export default function* createNewsWatcher() {
  yield takeEvery(LOAD_ALL_NEWS, loadAllNews);
}
