import { Button, Input } from 'components/common';
import React from 'react';
import styled from 'styled-components';

export interface SignInFormProps {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignIn: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SignInForm({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSignIn,
}: SignInFormProps) {
  return (
    <FormWrapper onSubmit={onSignIn}>
      <Input
        type="email"
        width={300}
        height={40}
        value={email}
        placeholder="이메일을 입력해주세요."
        onChange={onChangeEmail}
      />
      <Input
        type="password"
        width={300}
        height={40}
        value={password}
        placeholder="비밀번호를 입력해주세요."
        onChange={onChangePassword}
      />

      <Button width={300} height={40} variant="primary" type="submit">
        로그인
      </Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
  button {
    margin-bottom: 20px;
  }
`;

export default SignInForm;
