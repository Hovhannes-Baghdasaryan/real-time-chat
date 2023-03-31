import { FC } from 'react';
import { routesConstant } from './routes';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => (
  <div>
    <RouterProvider router={routesConstant} />
  </div>
);

export default App;
