import { getTodos } from 'apis/todo';
import TodoList from 'components/todo/TodoList';
import React, { useEffect, useState } from 'react';
import { Todo } from 'types/todo';

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    const loadTodo = async () => {
      const response = await getTodos();
      setTodos(response);
    };
    loadTodo();
  }, []);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}
export default TodoContainer;
