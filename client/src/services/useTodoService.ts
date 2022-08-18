import { useInput } from 'hooks';
import { createTodo } from 'libs/apis/createTodo';
import { deleteTodo } from 'libs/apis/deleteTodo';
import { getTodos } from 'libs/apis/getTodos';
import { updateTodo, UpdateTodoRequest } from 'libs/apis/updateTodo';
import { Todo } from 'libs/types/todo';
import { useEffect, useState } from 'react';

export type UpdateTodo = Pick<UpdateTodoRequest, 'id' | 'isCompleted'>;

export default function useTodoService() {
  const [todoText, onChangeTodoText, setTodoText] = useInput();
  const [newTodoText, onChangeNewTodoText, setNewTodoText] = useInput();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodo = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    loadTodo();
  }, []);

  const onCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createTodo({ todo: newTodoText });
    setTodos((prev) => prev.concat(response));
    setNewTodoText('');
  };

  const onUpdateTodo = async ({ id, isCompleted }: UpdateTodo) => {
    const response = await updateTodo({ id, todo: todoText, isCompleted });
    setTodos((prev) => prev.map((todo) => (todo.id === id ? response : todo)));
  };

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todoText,
    newTodoText,
    setTodoText,
    onChangeTodoText,
    onChangeNewTodoText,
    onCreateTodo,
    onUpdateTodo,
    onDeleteTodo,
    todos,
  };
}
