import React from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCard from './newsCard';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {news.map((el) => (
          <Grid item xs={3} key={el.id}>
            <NewsCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default React.memo(NewsList);
