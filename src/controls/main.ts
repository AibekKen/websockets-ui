import { WebSocket } from 'ws';
import { RequestTypes } from '../enums/request-data-types.enum.js';
import { JsonService } from '../services/json-service.js';
import { handleRegister } from './reg-control.js';
import { handleCreateRoom } from './create-room.js';

export const wsHandler = (ws: WebSocket) => {
    console.log(`New connection with websocket established`)
    ws.on("message", (message: ArrayBuffer) => {
      const req = JsonService.parseRequest(message.toString())
      switch (req.type) {
        case RequestTypes.REG: {
          handleRegister(req.data, ws)
          break;
        }
        case RequestTypes.CREATE_ROOM: {
          console.log(req)
          handleCreateRoom(ws)
          break;
        }
          
      
        default:
          break;
      }
    })
  }