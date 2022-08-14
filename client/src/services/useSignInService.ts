import { useInput } from 'hooks';
import React from 'react';
import { signIn } from 'apis';
import userStorage from 'utils/userStorage';
import Path from 'routes/Path';

export default function useSignInService() {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { access_token } = await signIn({ email, password });
      userStorage.set(access_token);
      window.location.replace(Path.Todo);
    } catch (e) {
      console.log(e);
      console.log('로그인에 실패했습니다.');
    }
  };

  return {
    email,
    password,
    onSignIn,
    onChangeEmail,
    onChangePassword,
  };
}
