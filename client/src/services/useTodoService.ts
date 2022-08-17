import { useInput } from 'hooks';
import { createTodo, deleteTodo, getTodos, updateTodo } from 'libs/apis/todo';
import { Todo, UpdateTodoRequest } from 'libs/types/todo';
import { useEffect, useState } from 'react';

export default function useTodoService() {
  const [todoText, onChangeTodoText] = useInput();
  const [newTodoText, onChangeNewTodoText, setNewTodoText] = useInput();
  const [todos, setTodos] = useState<Todo[]>();

  const loadTodo = async () => {
    const response = await getTodos();
    setTodos(response);
  };
  useEffect(() => {
    loadTodo();
  }, []);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<number>();
  const onModifyMode = (id: number) => {
    setSelectedTodo(id);
    setIsOpenForm(!isOpenForm);
  };

  const onCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTodo(newTodoText);
    loadTodo();
    setNewTodoText('');
  };

  const onUpdateTodo = async ({ id, todo, isCompleted }: UpdateTodoRequest) => {
    await updateTodo({ id, todo, isCompleted });
    loadTodo();
  };

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    loadTodo();
  };

  return {
    todoText,
    newTodoText,
    onChangeTodoText,
    onChangeNewTodoText,
    isOpenForm,
    setIsOpenForm,
    selectedTodo,
    setSelectedTodo,
    onModifyMode,
    onCreateTodo,
    onUpdateTodo,
    onDeleteTodo,
    todos,
  };
}
