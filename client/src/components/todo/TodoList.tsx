import React from 'react';
import styled from 'styled-components';
import { Todo } from 'types/todo';

interface TodoListProps {
  todos: Todo[] | undefined;
}

function TodoList({ todos }: TodoListProps) {
  return (
    <List>
      {todos?.map(({ id, todo }: Todo) => (
        <Item key={id}>{todo}</Item>
      ))}
    </List>
  );
}
export default TodoList;

const List = styled.ul``;

const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #d4d2cf;
  &:first-child {
    border-top: 1px solid #d4d2cf;
  }
  &:hover {
    background-color: #e4ecf8;
  }
`;
