import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Card } from '../components';

const AuthLayout: FC = () => (
  <Card>
    <Card.Body>
      <Outlet />
    </Card.Body>
    <Card.Below>Hi</Card.Below>
  </Card>
);

export default AuthLayout;
