import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const TodoPage = lazy(() => import('pages/TodoPage'));

function Routing() {
  return (
    <Routes>
      <Route path={Path.SignIn} element={<SignInPage />} />
      <Route path={Path.SignUp} element={<SignUpPage />} />
      <Route path={Path.Todo} element={<TodoPage />} />
    </Routes>
  );
}

export default Routing;
