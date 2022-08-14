import React from 'react';
import { SignInContainer } from 'containers/signIn';
import { AuthTemplate } from 'components/common';

function SignInPage() {
  return (
    <AuthTemplate title="로그인">
      <SignInContainer />
    </AuthTemplate>
  );
}

export default SignInPage;
