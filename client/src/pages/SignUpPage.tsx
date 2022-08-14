import React from 'react';
import { AuthTemplate } from 'components/common';
import { SignUpContainer } from 'containers/signUp';

function SignUpPage() {
  return (
    <AuthTemplate title="회원가입">
      <SignUpContainer />
    </AuthTemplate>
  );
}

export default SignUpPage;
