import { Button, Input } from 'components/common';
import React from 'react';
import styled from 'styled-components';
import { Todo, UpdateTodoRequest } from 'libs/types/todo';

interface TodoListProps {
  todos: Todo[] | undefined;
  todoText: string;
  isOpenForm: boolean;
  setIsOpenForm: (isOpenForm: boolean) => void;
  selectedTodo: number | undefined;
  setSelectedTodo: (id: number) => void;
  onModifyMode: (id: number) => void;
  onChangeTodoText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdateTodo: ({ id, todo, isCompleted }: UpdateTodoRequest) => void;
  onDeleteTodo: (id: number) => void;
}

function TodoList({
  todos,
  todoText,
  isOpenForm,
  setIsOpenForm,
  selectedTodo,
  setSelectedTodo,
  onModifyMode,
  onChangeTodoText,
  onUpdateTodo,
  onDeleteTodo,
}: TodoListProps) {
  return (
    <List>
      {todos?.map(({ id, todo, isCompleted }: Todo) => (
        <Item key={id}>
          {isOpenForm && id === selectedTodo ? (
            <>
              <Input value={todoText} onChange={onChangeTodoText} />
              <Button onClick={() => onUpdateTodo({ id, todo, isCompleted })}>
                수정
              </Button>
              <Button onClick={() => setIsOpenForm(false)}>취소</Button>
            </>
          ) : (
            <>
              <span>{todo}</span>
              <ButtonGroup>
                <Button onClick={() => onModifyMode(id)}>수정</Button>
                <Button variant="secondary" onClick={() => onDeleteTodo(id)}>
                  삭제
                </Button>
              </ButtonGroup>
            </>
          )}
        </Item>
      ))}
    </List>
  );
}
export default TodoList;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
