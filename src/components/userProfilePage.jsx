import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/pages.scss';
import { Typography, Button, Modal, Backdrop } from '@material-ui/core';
import { loadUsers } from '../redux/actions/userActions';
import NewsList from './newsList';
import InfoBlock from './common/infoBlock';
import ProfileInfo from '../components/profileInfo';
import AddNewsForm from '../components/addNewsForm';
import EditProfileForm from '../components/editProfileForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UserProfilePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const alertInfo = useSelector((state) => state.news.alertInfo);
  const [open, setOpen] = useState(false);
  const [modalMode, setModalMode] = useState('');

  useEffect(() => dispatch(loadUsers({ isCurrent: true })), []);

  const handleOpen = (mode) => {
    setOpen(true);
    setModalMode(mode);
  };

  const handleClose = () => {
    setOpen(false);
    setModalMode('');
  };

  return (
    <div className={'main-block'}>
      {alertInfo && <InfoBlock info={alertInfo} />}
      <div className={'action-block'}>
        <Button variant="contained" color="primary" onClick={() => handleOpen('edit')}>
          edit profile
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleOpen('new')}>
          Add news
        </Button>
      </div>
      <ProfileInfo info={userInfo} />
      {userInfo.articles?.length ? (
        <NewsList info={userInfo} />
      ) : (
        <Typography>No news added yet.</Typography>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {modalMode === 'new' ? (
          <AddNewsForm closeModal={handleClose} />
        ) : (
          <EditProfileForm closeModal={handleClose} info={userInfo} />
        )}
      </Modal>
    </div>
  );
};

export default React.memo(UserProfilePage);
