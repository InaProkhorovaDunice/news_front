import { getLocalStorageItem } from '../hooks/useLocalStorage';

export const checkIfAuthorized = () => {
  return getLocalStorageItem('uid');
};
