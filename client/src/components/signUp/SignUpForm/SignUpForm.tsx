import { Button, Input } from 'components/common';
import React from 'react';
import styled from 'styled-components';

export interface SignUpFormProps {
  email: string;
  password: string;
  passwordConfirm: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
  isDisabled?: boolean;
}

function SignUpForm({
  email,
  onChangeEmail,
  passwordConfirm,
  onChangePassword,
  onChangePasswordConfirm,
  onSignUp,
  password,
  isDisabled,
}: SignUpFormProps) {
  return (
    <FormWrapper onSubmit={onSignUp}>
      <Input
        width={300}
        height={40}
        type="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        width={300}
        height={40}
        placeholder="비밀번호를 입력해주세요."
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <Input
        width={300}
        height={40}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
      />
      <Button
        width={300}
        height={40}
        variant="primary"
        type="submit"
        disabled={isDisabled}
      >
        회원가입
      </Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 12px;
  }
  button {
    margin: 15px 0;
  }
`;

export default SignUpForm;
