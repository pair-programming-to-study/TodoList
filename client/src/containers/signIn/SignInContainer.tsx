import React from 'react';
import { SignInForm } from 'components/signIn';
import { useSignInService } from 'services';
import { AuthLink } from 'components/common';
import DividerLine from 'components/common/DriverLine/DriverLine';

function SignInContainer() {
  const { email, onChangeEmail, password, onChangePassword, onSignIn } =
    useSignInService();

  return (
    <>
      <SignInForm
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}
        onSignIn={onSignIn}
      />
      <DividerLine width="100%" color="#d4d2cf" mt={10} mb={30} />
      <AuthLink authType="signIn" />
    </>
  );
}

export default SignInContainer;
