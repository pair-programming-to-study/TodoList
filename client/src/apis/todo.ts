import client from './client';
import { Todo, UpdateTodoRequest } from 'types/todo';
import { SERVER_URL } from 'utils/constants';

export const createTodo = async (todo: string) => {
  const response = await client.post<Todo>(`${SERVER_URL}/todos`, { todo });
  return response.data;
};

export const getTodos = async () => {
  const response = await client.get<Todo[]>(`${SERVER_URL}/todos`);
  return response.data;
};

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
}: UpdateTodoRequest) => {
  const response = await client.put<Todo>(`${SERVER_URL}/todos/${id}`, {
    todo,
    isCompleted,
  });
  return response.data;
};

export const deleteTodo = async (id: number) => {
  await client.delete(`${SERVER_URL}/todos/${id}`);
};
