import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAllNews } from '../redux/actions/newsActions';
import { Typography, Avatar } from '@material-ui/core';
import '../styles/pages.scss';
import PropTypes from 'prop-types';

const ProfileInfo = (props) => {
  const { imgUrl, email, nickname } = props.info;
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadAllNews()), []);

  return (
    <div className={'info-container'}>
      <div className={'avatar-block'}>
        <Avatar alt="Remy Sharp" src={imgUrl} />
      </div>
      <div className={'data-block'}>
        <Typography>{`nickname: ${nickname}`}</Typography>
        <Typography>{`email: ${email}`}</Typography>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  info: PropTypes.object.isRequired,
};

export default React.memo(ProfileInfo);
