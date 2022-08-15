import React, { ReactNode } from 'react';

export interface AuthTemplateProps {
  children: ReactNode;
  title: string;
}

function AuthTemplate({ children, title }: AuthTemplateProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default AuthTemplate;
