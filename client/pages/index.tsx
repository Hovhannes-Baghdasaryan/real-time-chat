import React, { FC, useEffect, useState } from 'react';
import { useSockets } from '../hooks/useSocket';

const Home: FC = () => {
  const socket = useSockets();
  const [socketId, setSocketId] = useState<string | undefined>();

  useEffect(() => {
    setSocketId(socket.id);
  }, []);

  return <div>{socketId}</div>;
};

export default Home;
