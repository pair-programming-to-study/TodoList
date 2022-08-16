import axios from 'axios';
import {
  CreateTodoRequest,
  CreateTodoResponse,
  GetTodosResponse,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from 'types/todo';
import { SERVER_URL } from 'utils/constants';

export const createTodo = async (todo: CreateTodoRequest) => {
  const response = await axios.post<CreateTodoResponse>(
    `${SERVER_URL}/todos`,
    todo
  );
  return response.data;
};

export const getTodos = async () => {
  const response = await axios.get<GetTodosResponse>(`${SERVER_URL}/todos`);
  return response.data;
};

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
}: UpdateTodoRequest) => {
  const response = await axios.put<UpdateTodoResponse>(
    `${SERVER_URL}/todos/${id}`,
    {
      todo,
      isCompleted,
    }
  );
  return response.data;
};

export const deleteTodo = async (id: number) => {
  await axios.delete(`${SERVER_URL}/todos/${id}`);
};
