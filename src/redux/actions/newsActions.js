import { createActions } from 'redux-actions';

import { LOAD_ALL_NEWS, LOAD_ALL_NEWS_SUCCESS, LOAD_ALL_NEWS_FAILED } from '../constants';

export const { loadAllNews, loadAllNewsSuccess, loadAllNewsFailed } = createActions(
  LOAD_ALL_NEWS,
  LOAD_ALL_NEWS_SUCCESS,
  LOAD_ALL_NEWS_FAILED,
);
