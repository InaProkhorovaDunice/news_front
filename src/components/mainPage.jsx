import React from 'react';
import NewsList from './newsList';

const MainPage = () => {
  return (
    <div>
      <NewsList news={[1, 2, 3, 4, 5, 6, 7]} />
    </div>
  );
};

export default React.memo(MainPage);
