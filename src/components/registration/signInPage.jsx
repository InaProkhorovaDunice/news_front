import React from 'react';
import RegistrationForm from './registrationForm';

const SignUpPage = () => {
  return (
    <div>
      <RegistrationForm action={'Sign In'} link={'sign_up'} />
    </div>
  );
};

export default React.memo(SignUpPage);
