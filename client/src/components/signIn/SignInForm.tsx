import React from 'react';

interface Props {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignIn: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SignInForm({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSignIn,
}: Props) {
  return (
    <form onSubmit={onSignIn}>
      <input type="email" value={email} onChange={onChangeEmail} />
      <input type="password" value={password} onChange={onChangePassword} />
      <button type="submit">Signin</button>
    </form>
  );
}
export default SignInForm;
