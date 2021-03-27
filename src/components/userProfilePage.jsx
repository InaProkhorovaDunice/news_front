import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/pages.scss';
import { Typography, Button, Modal, Backdrop } from '@material-ui/core';
import { loadUsers } from '../redux/actions/userActions';
import NewsList from './newsList';
// const AddNewsForm = lazy(() => import('../components/addNewsForm'));
import AddNewsForm from '../components/addNewsForm';
import EditProfileForm from '../components/editProfileForm';
// const EditProfileForm = lazy(() => import('../components/editProfileForm'));

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
  const userInfo = useSelector((state) => state.user.users);
  const [open, setOpen] = useState(false);
  const [modalMode, setModalMode] = useState('');

  useEffect(() => dispatch(loadUsers({ params: 'isCurrent=true' })), []);

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
      <Button variant="contained" color="primary" onClick={() => handleOpen('edit')}>
        edit profile
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleOpen('new')}>
        Add news
      </Button>
      {userInfo.articles && userInfo.articles.length ? (
        <NewsList news={userInfo.articles} />
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
        {modalMode === 'new' ? <AddNewsForm /> : <EditProfileForm />}
      </Modal>
    </div>
  );
};

export default React.memo(UserProfilePage);
