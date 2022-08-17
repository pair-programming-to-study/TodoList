import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const TodoPage = lazy(() => import('pages/TodoPage'));

function Routing() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={Path.SIGNIN} element={<SignInPage />} />
        <Route path={Path.SIGNUP} element={<SignUpPage />} />
        <Route path={Path.TODO} element={<TodoPage />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
