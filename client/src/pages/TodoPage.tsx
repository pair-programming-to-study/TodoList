import TodoContainer from 'containers/todo/TodoContainer';
import React from 'react';
import styled from 'styled-components';

function TodoPage() {
  return (
    <Container>
      <Inner>
        <TodoH1>Todo</TodoH1>
        <TodoContainer />
      </Inner>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  margin-top: 40px;
`;

const Inner = styled.div`
  width: 500px;
`;

const TodoH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default TodoPage;
