import { AuthLink } from 'components/common';
import DividerLine from 'components/common/DriverLine/DriverLine';
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
    <>
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
      <DividerLine width="100%" color="#d4d2cf" mt={10} mb={30} />
      <AuthLink authType="signUp" />
    </>
  );
}

export default SignUpContainer;
