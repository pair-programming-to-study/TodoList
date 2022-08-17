export const checkEmailRegex = (email: string) => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexEmail.test(String(email));
};

const MAX_PASSWORD_LENGTH = 8;

export const checkPasswordLength = (password: string) =>
  password.length >= MAX_PASSWORD_LENGTH;

export const checkPasswordAndPasswordConfirm = (
  password: string,
  passwordConfirm: string
) => password === passwordConfirm;
