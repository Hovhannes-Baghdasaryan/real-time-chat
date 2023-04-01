import { FC } from 'react';

import ISocketProviderProps from './types';
import { socket, SocketContext } from './SocketContext';

const SocketsProvider: FC<ISocketProviderProps> = ({ children }) => {
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketsProvider;
