import { SignUpForm } from 'components/signUp';
import React from 'react';
import useSignUpService from 'services/useSignUpService';

function SignUpContainer() {
  const {
    email,
    password,
    passwordConfirm,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    onSignUp,
    isDisabled,
  } = useSignUpService();

  return (
    <SignUpForm
      email={email}
      password={password}
      passwordConfirm={passwordConfirm}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordConfirm={onChangePasswordConfirm}
      onSignUp={onSignUp}
      isDisabled={isDisabled}
    />
  );
}

export default SignUpContainer;
