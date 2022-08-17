import axios from 'axios';
import { SERVER_URL } from 'utils/constants';
import userStorage from 'utils/userStorage';

const client = axios.create({});

client.defaults.baseURL = SERVER_URL;

client.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      throw new Error('헤더가 존재하지 않습니다.');
    }

    const accessToken = userStorage.get();
    if (!accessToken) throw new Error('토큰이 존재하지 않습니다');

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
