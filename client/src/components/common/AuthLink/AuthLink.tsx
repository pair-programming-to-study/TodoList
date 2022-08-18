import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

interface Props {
  authType: 'signIn' | 'signUp';
}

function AuthLink({ authType }: Props) {
  const signInParams = {
    title: '아직 회원이 아니신가요?',
    path: Path.SIGNUP,
    label: '회원가입 하기',
  };

  const signUpParams = {
    title: '이미 회원이신가요?',
    path: Path.SIGNIN,
    label: '로그인 하기',
  };

  const authParams = authType === 'signIn' ? signInParams : signUpParams;
  const { label, path, title } = authParams;

  return (
    <Text>
      {title}
      <StyledLink to={path}>{label}</StyledLink>
    </Text>
  );
}

const Text = styled.span`
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: #4848e9;
  margin-left: 6px;
`;

export default React.memo(AuthLink);
