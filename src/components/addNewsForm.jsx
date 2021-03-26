import React from 'react';
import '../styles/reactForm.scss';
import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const AddNewsForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className={'registration-container'}>
      <form className={'form-block'} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h4'}>fdsfgsg</Typography>
      </form>
    </div>
  );
};

export default React.memo(AddNewsForm);
