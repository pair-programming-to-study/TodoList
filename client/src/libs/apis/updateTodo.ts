import { SERVER_URL } from 'libs/utils/constants';
import client from './client';

export interface UpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface GetTodosResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
}: UpdateTodoRequest) => {
  const response = await client.put<GetTodosResponse>(
    `${SERVER_URL}/todos/${id}`,
    {
      todo,
      isCompleted,
    }
  );
  return response.data;
};
