import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface AuthTemplateProps {
  children: ReactNode;
  title: string;
}

function AuthTemplate({ children, title }: AuthTemplateProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;

export default AuthTemplate;
