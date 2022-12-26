import axios from 'axios';
import { Todo } from 'libs/types/todo';
import { SERVER_URL } from 'libs/utils/constants';

export type GetTodosResponse = Todo[];

export const getTodos = async () => {
  const response = await axios.get<GetTodosResponse>(`${SERVER_URL}/todos`);
  return response.data;
};
