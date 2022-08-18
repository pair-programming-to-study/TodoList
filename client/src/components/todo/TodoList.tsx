import { Button, Input } from 'components/common';
import React from 'react';
import styled from 'styled-components';
import { Todo } from 'libs/types/todo';
import { UpdateTodo } from 'services/useTodoService';

interface TodoListProps {
  todos: Todo[];
  todoText: string;
  onChangeTodoText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdateTodo: ({ id, isCompleted }: UpdateTodo) => void;
  onDeleteTodo: (id: number) => void;
  isSelectedTodoId: number | null;
  onChangeSelectedTodoId: (todoId: number | null) => void;
  setTodoText: (text: string) => void;
}

function TodoList({
  todos,
  todoText,
  onChangeTodoText,
  onUpdateTodo,
  onDeleteTodo,
  isSelectedTodoId,
  onChangeSelectedTodoId,
  setTodoText,
}: TodoListProps) {
  return (
    <List>
      {todos.map(({ id, todo, isCompleted }) => (
        <Item key={id}>
          <Input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onUpdateTodo({ id, isCompleted: !isCompleted })}
          />
          {isSelectedTodoId === id ? (
            <>
              <Input value={todoText} onChange={onChangeTodoText} />
              <ButtonGroup>
                <Button
                  onClick={() => {
                    onUpdateTodo({ id, isCompleted });
                    onChangeSelectedTodoId(null);
                  }}
                >
                  수정완료
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => onChangeSelectedTodoId(null)}
                >
                  취소
                </Button>
              </ButtonGroup>
            </>
          ) : (
            <>
              <span>{todo}</span>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    onChangeSelectedTodoId(id);
                    setTodoText(todo);
                  }}
                >
                  수정
                </Button>
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
  button {
    margin-right: 6px;
  }
`;
