import React from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCard from './newsCard';

const NewsList = ({ news }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {news.map((el) => (
          <Grid item xs={3}>
            <NewsCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(NewsList);
