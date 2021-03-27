import { handleActions } from 'redux-actions';
import { loadAllNewsSuccess, loadAllNewsFailed } from '../actions/newsActions';

const initialState = {
  allNews: [],
  loadNewsError: '',
};

const authHandler = {
  [loadAllNewsSuccess]: (state, { payload }) => {
    return { ...state, allNews: payload.data, loadNewsError: '' };
  },
  [loadAllNewsFailed]: (state, { payload }) => {
    return { ...state, loadNewsError: payload.error };
  },
};

const newsReducer = handleActions(authHandler, initialState);
export default newsReducer;
