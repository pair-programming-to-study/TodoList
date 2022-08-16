import { useInput } from 'hooks';
import React, { useMemo } from 'react';
import { signUp } from 'apis/signUp';
import Path from 'routes/Path';
import userStorage from 'utils/userStorage';
import {
  checkEmailRegex,
  checkPasswordAndPasswordConfirm,
  checkPasswordLength,
} from 'utils/validation';

export default function useSignUpService() {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [passwordConfirm, onChangePasswordConfirm] = useInput();

  const isDisabled = useMemo(
    () =>
      !checkEmailRegex(email) ||
      !checkPasswordLength(password) ||
      !checkPasswordAndPasswordConfirm(password, passwordConfirm),
    [email, password, passwordConfirm]
  );

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkEmailRegex(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!checkPasswordLength(password)) {
      alert('비밀번호가 8자리 이상이어야 합니다.');
      return;
    }
    if (!checkPasswordAndPasswordConfirm(password, passwordConfirm)) {
      alert('비밀번호가 일치하지 않습니다.');

      return;
    }
    try {
      const { access_token } = await signUp({ email, password });
      userStorage.set(access_token);
      window.location.replace(Path.Todo);
    } catch (e) {
      console.log(e);
      console.log('회원가입에 실패했습니다');
    }
  };

  return {
    email,
    password,
    passwordConfirm,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    onSignUp,
    isDisabled,
  };
}
