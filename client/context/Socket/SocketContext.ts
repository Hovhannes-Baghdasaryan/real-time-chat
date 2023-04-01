import { createContext } from 'react';
import { io } from 'socket.io-client';
import { SOCKET__URL } from '../../constants/socket';

export const socket = io(SOCKET__URL);

export const SocketContext = createContext(socket);
