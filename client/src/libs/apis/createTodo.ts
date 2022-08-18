import { Todo } from 'libs/types/todo';
import { SERVER_URL } from 'libs/utils/constants';
import client from './client';

export interface CreateTodoRequest {
  todo: string;
}

export interface CreateTodoResponse extends Todo {}

export const createTodo = async ({ todo }: CreateTodoRequest) => {
  const response = await client.post<CreateTodoResponse>(
    `${SERVER_URL}/todos`,
    {
      todo,
    }
  );
  return response.data;
};
