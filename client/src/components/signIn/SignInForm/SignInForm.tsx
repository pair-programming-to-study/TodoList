import { Button, Input } from 'components/common';
import DividerLine from 'components/common/DriverLine/DriverLine';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
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

      <DividerLine width="100%" color="#d4d2cf" mt={10} mb={30} />

      <Text>
        아직 회원이 아니신가요?
        <StyledLink to={Path.SIGNUP}>회원가입 하기</StyledLink>
      </Text>
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

const Text = styled.span`
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: #4848e9;
  margin-left: 6px;
`;
export default SignInForm;
