import TodoContainer from 'containers/todo/TodoContainer';
import e from 'express';
import { createTodo } from 'libs/apis/createTodo';
import React, { useState } from 'react';
import styled from 'styled-components';

function TodoPage() {
  const [todo, setTodo] = useState("안녕하세요") //useState 는 함수이름
  
  const onChangeValue = (event: any) => {   //event 뒤에 타입이름인데 any로해도 상관 x
    setTodo(event.target.value);
  };

  const onCreateTodo = (e:any) => {
    const response = createTodo({todo:todo});
    console.log(response);
  }

  return (
    <Container>
      <Inner>
        <TodoH1>Todo</TodoH1>
        {todo}
        <input value={todo} onChange={onChangeValue}/>
        <button onClick={onCreateTodo}>버튼</button>
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
