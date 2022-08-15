import React from 'react';

export interface SignInFormProps {
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
}: SignInFormProps) {
  return (
    <form onSubmit={onSignIn}>
      <input type="email" value={email} onChange={onChangeEmail} />
      <input type="password" value={password} onChange={onChangePassword} />
      <button type="submit">Signin</button>
    </form>
  );
}
export default SignInForm;
