import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './style/main.scss';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error/Error';
import { Login } from './pages/login/Login';
import { Main } from './pages/main/Main';
import { NoMatch, loader as NoMatchLoader} from './pages/nomatch/NoMatch';
import { Type } from './pages/type/Type';
import { Item, loader as ItemLoader } from './pages/item/Item';
import { Submit, action as FormAction} from './pages/form/Submit';

const nav_themes = 'products pricing partners'
  .split(' ')
  .map((el, i) => {
    return {
      path: `:type/:id`,
      element: <Item />,
      loader: ItemLoader,
    }
  });



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <NoMatch />,
        loader: NoMatchLoader,
      },
      {
        path: 'submission',
        element: <Submit/>,
        action: FormAction,
      },
      {
        path: 'types',
        element: <Type />,
        children: [
          ...nav_themes
        ]
      }
    ]
  }
], {
  // basename: "/app"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

