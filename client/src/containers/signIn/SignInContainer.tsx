import React from 'react';
import { SignInForm } from 'components/signIn';
import { useSignInService } from 'services';

function SignInContainer() {
  const { email, onChangeEmail, password, onChangePassword, onSignIn } =
    useSignInService();

  return (
    <SignInForm
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
      onSignIn={onSignIn}
    />
  );
}

export default SignInContainer;
