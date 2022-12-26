import axios from 'axios';
import { SERVER_URL } from 'libs/utils/constants';

export const deleteTodo = async (id: number) => {
  await axios.delete(`${SERVER_URL}/todos/${id}`);
};
