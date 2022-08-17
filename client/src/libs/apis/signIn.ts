import axios from 'axios';
import { SERVER_URL } from 'libs/utils/constants';

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}

export const signIn = async ({ email, password }: SignInRequest) => {
  const response = await axios.post<SignInResponse>(
    `${SERVER_URL}/auth/signin`,
    {
      email,
      password,
    }
  );
  return response.data;
};
