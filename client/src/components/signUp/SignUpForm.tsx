import { Button } from 'components/common';
import React from 'react';

interface Props {
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
}: Props) {
  return (
    <form onSubmit={onSignUp}>
      <input
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일을 입력해주세요"
      />
      <input
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해주세요"
      />
      <input
        type="password"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
        placeholder="비밀번호를 다시 입력해주세요"
      />
      <Button type="submit" variant="primary" disabled={isDisabled}>
        SignUp
      </Button>
    </form>
  );
}

export default SignUpForm;
