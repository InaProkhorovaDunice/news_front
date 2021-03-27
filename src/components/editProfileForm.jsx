import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/reactForm.scss';
import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { createNews } from '../redux/actions/newsActions';
import PropTypes from 'prop-types';
import { validateEmail } from '../hooks/useValidation';

const classNames = require('classnames');

const EditProfileForm = ({ closeModal }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(createNews(data));
    closeModal();
  };

  return (
    <div className={'registration-container'}>
      <form className={classNames('form-block', 'modal-form')} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h4'}>Edit your profile</Typography>
        <input
          className={'base-input'}
          name="nickname"
          placeholder={'nickname'}
          ref={register({ maxLength: 30 })}
        />
        {errors.title && (
          <span className={'error-text'}>This field must be no more than 30 characters.</span>
        )}
        <input
          className={'base-input'}
          name="email"
          placeholder={'email'}
          ref={register({ required: true, validate: (value) => validateEmail(value) })}
        />
        {errors.email && (
          <span className={'error-text'}>
            This field is required and must match the format example@service.domen
          </span>
        )}
        <input
          className={'base-input'}
          name="password"
          type="password"
          placeholder="password"
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
        />
        {errors.password && <span className={'error-text'}>{errors.password.message}</span>}
        <input
          className={'base-input'}
          name="password_repeat"
          type="password"
          placeholder="password confirmation"
          ref={register({
            validate: (value) => value === password.current,
          })}
        />
        {errors.password_repeat && <span className={'error-text'}>The passwords do not match</span>}
        <input className={classNames('base-input', 'blue-button')} type="submit" value={'Save'} />
      </form>
    </div>
  );
};

EditProfileForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default React.memo(EditProfileForm);
