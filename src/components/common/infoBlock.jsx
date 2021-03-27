import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { clearNewsAlertInfo } from '../../redux/actions/newsActions';
import { clearUsersAlertInfo } from '../../redux/actions/userActions';

const InfoBlock = ({ info }) => {
  const { type, message, resource } = info;
  const dispatch = useDispatch();

  const clearAlertInfo = () => {
    if (resource === 'news') {
      dispatch(resource === 'news' ? clearNewsAlertInfo() : clearUsersAlertInfo());
    }
  };

  return (
    <div className={'alert-block'}>
      <Alert severity={type} onClose={clearAlertInfo}>
        {message}
      </Alert>
    </div>
  );
};

InfoBlock.propTypes = {
  info: PropTypes.object.isRequired,
};

export default React.memo(InfoBlock);
