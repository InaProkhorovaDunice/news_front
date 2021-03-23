import { handleActions } from 'redux-actions';
import { setLocalStorageItem } from '../../hooks/useLocalStorage';
import {
  requestSignUpFailed,
  requestLoginSuccess,
  requestLoginFailed,
} from '../actions/authActions';

const initialState = {
  userInfo: {},
  registrationError: '',
};

const authHandler = {
  [requestLoginSuccess]: (state, { payload }) => {
    setLocalStorageItem('client', payload.headers.client);
    setLocalStorageItem('access-token', payload.headers['access-token']);
    return { ...state, userInfo: payload.data };
  },
};

const authReducer = handleActions(authHandler, initialState);
export default authReducer;
