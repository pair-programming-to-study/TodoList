import { Todo } from 'libs/types/todo';
import { SERVER_URL } from 'libs/utils/constants';
import client from './client';

export type GetTodosResponse = Todo[];

export const getTodos = async () => {
  const response = await client.get<GetTodosResponse>(`${SERVER_URL}/todos`);
  return response.data;
};
