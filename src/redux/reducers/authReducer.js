import { handleActions } from 'redux-actions';
import {
  requestSignUpSuccess,
  requestSignUpFailed,
  requestLoginSuccess,
  requestLoginFailed,
} from '../actions/authActions';

const initialState = {
  userInfo: {},
  registrationError: '',
};

const authHandler = {
  [requestSignUpSuccess]: (state, { payload }) => {
    return { ...state };
  },
  [requestLoginSuccess]: (state, { payload }) => {
    return { ...state };
  },
};

const authReducer = handleActions(authHandler, initialState);
export default authReducer;
