import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const TodoPage = lazy(() => import('pages/TodoPage'));

function Routing() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={Path.TODO} element={<TodoPage />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
