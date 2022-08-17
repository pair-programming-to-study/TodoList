import axios from 'axios';
import { SERVER_URL } from 'libs/utils/constants';

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  access_token: string;
}

export const signUp = async ({ email, password }: SignUpRequest) => {
  const response = await axios.post<SignUpResponse>(
    `${SERVER_URL}/auth/signup`,
    {
      email,
      password,
    }
  );

  return response.data;
};
