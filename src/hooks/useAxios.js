import { apiUrl } from '../config';
import { getLocalStorageItem } from './useLocalStorage';
import queryString from 'query-string';

export const getUrl = (route, paramsObj) => {
  let params = '';
  if (paramsObj) {
    params = `?${queryString.stringify(paramsObj)}`;
  }
  return `${apiUrl}/${route}${params}`;
};

export const getHeaders = (type = 'normal') => {
  const accessToken = getLocalStorageItem('access-token');
  const uid = getLocalStorageItem('uid');
  const client = getLocalStorageItem('client');
  let headers;
  if (type === 'formData') {
    headers = {
      'Access-Control-Allow-Origin': '*/*',
      'Content-Type': 'application/json',
      'access-token': accessToken,
      uid: uid,
      client: client,
    };
  } else {
    headers = {
      'Access-Control-Allow-Origin': '*/*',
      'Content-Type': 'application/json',
      'access-token': accessToken,
      uid: uid,
      client: client,
    };
  }
  return headers;
};
