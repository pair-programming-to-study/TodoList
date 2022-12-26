import axios from 'axios';
import { Todo } from 'libs/types/todo';
import { SERVER_URL } from 'libs/utils/constants';

export interface CreateTodoRequest {
  todo: string;
}

export interface CreateTodoResponse extends Todo {}

export const createTodo = async ({ todo }: CreateTodoRequest) => {
  const response = await axios.post<CreateTodoResponse>(`${SERVER_URL}/todos`, {
    todo,
  });
  return response.data;
};
