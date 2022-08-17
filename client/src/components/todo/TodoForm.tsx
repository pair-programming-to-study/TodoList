import { Button, Input } from 'components/common';
import React from 'react';
import styled from 'styled-components';

interface TodoFormProps {
  newTodoText: string;
  onChangeNewTodoText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreateTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

function TodoForm({
  newTodoText,
  onChangeNewTodoText,
  onCreateTodo,
}: TodoFormProps) {
  return (
    <>
      <Form onSubmit={onCreateTodo}>
        <FormTitleInput
          type="text"
          value={newTodoText}
          height={40}
          placeholder="내용을 입력해주세요"
          onChange={onChangeNewTodoText}
        />
        <FormButton type="submit">추가</FormButton>
      </Form>
    </>
  );
}
export default TodoForm;

const Form = styled.form`
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
`;

const FormTitleInput = styled(Input)`
  border: none;
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const FormButton = styled(Button)`
  margin-right: 8px;
`;
