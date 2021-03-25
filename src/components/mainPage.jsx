import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllNews } from '../redux/actions/newsActions';
import { Typography } from '@material-ui/core';
import '../styles/pages.scss';
import NewsList from './newsList';

const MainPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.allNews);

  useEffect(() => dispatch(loadAllNews()), []);

  return (
    <div className={'main-block'}>
      {!news.length && <Typography>No news added yet.</Typography>}
      <NewsList news={news} />
    </div>
  );
};

export default React.memo(MainPage);
