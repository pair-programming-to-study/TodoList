import { Button, Input } from 'components/common';
import DividerLine from 'components/common/DriverLine/DriverLine';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
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

      <DividerLine width="100%" color="#d4d2cf" mt={10} mb={30} />

      <Text>
        이미 회원이신가요?
        <StyledLink to={Path.SIGNIN}>로그인 하기</StyledLink>
      </Text>
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

const Text = styled.span`
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: #4848e9;
  margin-left: 6px;
`;

export default SignUpForm;
