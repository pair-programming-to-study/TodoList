import { useInput } from 'hooks';
import React, { useMemo } from 'react';
import { signUp } from 'apis/signUp';
import Path from 'routes/Path';
import userStorage from 'utils/userStorage';

function checkEmailValidation(email: string) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexEmail.test(String(email));
}

export default function useSignUpService() {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [passwordConfirm, onChangePasswordConfirm] = useInput();

  const checkEmail = useMemo(() => checkEmailValidation(email), [email]);
  const checkPasswordLength = useMemo(() => password.length >= 8, [password]);
  const checkPasswordAndPasswordConfirm = useMemo(
    () => password === passwordConfirm,
    [password, passwordConfirm]
  );
  const isDisabled = useMemo(
    () =>
      !checkEmail || !checkPasswordLength || !checkPasswordAndPasswordConfirm,
    [checkEmail, checkPasswordLength, checkPasswordAndPasswordConfirm]
  );

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkEmail) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!checkPasswordLength) {
      alert('비밀번호가 8자리 이상이어야 합니다.');
      return;
    }
    if (!checkPasswordAndPasswordConfirm) {
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
