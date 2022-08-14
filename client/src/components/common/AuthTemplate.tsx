import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

function AuthTemplate({ children, title }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default AuthTemplate;
