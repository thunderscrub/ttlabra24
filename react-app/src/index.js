import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Root from './routes/root';
import FormRenderer from './routes/FormRenderer';
import FormsList from './routes/FormsList';
import FormBuilder from './routes/FormBuilder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'FormBuilder',
        element: <FormBuilder />,
      },
      {
        path: 'FormRenderer',
        element: <FormRenderer />,
      },
      {
        path: 'FormsList',
        element: <FormsList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
