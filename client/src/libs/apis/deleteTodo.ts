import { SERVER_URL } from 'libs/utils/constants';
import client from './client';

export const deleteTodo = async (id: number) => {
  await client.delete(`${SERVER_URL}/todos/${id}`);
};
