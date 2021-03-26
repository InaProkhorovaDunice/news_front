import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/pages.scss';
import { Typography } from '@material-ui/core';
import { loadUsers } from '../redux/actions/userActions';
import NewsList from './newsList';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => dispatch(loadUsers({ isCurrent: true })), []);

  return (
    <div className={'main-block'}>
      {userInfo.news && userInfo.news.length ? (
        <NewsList news={userInfo.news} />
      ) : (
        <Typography>No news added yet.</Typography>
      )}
    </div>
  );
};

export default React.memo(UserProfilePage);
