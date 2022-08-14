import axios from 'axios';
import { SERVER_URL } from 'utils/constants';

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL = SERVER_URL;

client.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error('헤더가 존재하지 않습니다');
  }

  // 토큰 가져와서 ex) getToken

  const accessToken = 'temp';

  if (!accessToken) throw new Error('토큰이 존재하지 않습니다');

  config.headers.Authorization = `Bearer ${accessToken}`;
});
