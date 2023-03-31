import { createBrowserRouter } from 'react-router-dom';
import { Login, Register } from '../pages';
import AuthLayout from '../layout/AuthLayout';

export const routesConstant = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);
