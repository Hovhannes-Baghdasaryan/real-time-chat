import { Server, Socket } from "socket.io"
import logger from "./utils/logger"

const EVENTS = {
    connection: "connection"
}

interface ISocketArgumentType{io:Server}

const socket = ({ io }: ISocketArgumentType) => {
    logger.info("Socket enabled")

    io.on(EVENTS.connection, (socket: Socket) => {
        logger.info(`User connected ${socket.id}`)
    })
}

export default socket;