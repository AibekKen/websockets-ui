import { WebSocket } from 'ws';
import { LoginData } from '../types/login.interface.js';
import { DataBase } from '../db/database.js';
import { RequestTypes } from '../enums/request-data-types.enum.js';
import { JsonService } from '../services/json-service.js';
import { LoginResponseData } from '../types/login-response.interface.js';
import { RequestData } from '../types/request-data.js';
import { Room } from '../types/update-rooms.interface.js';
import { WinnerData } from '../types/update-winners.js';

export const handleRegister = (loginData: LoginData, ws: WebSocket) => {
  let index = DataBase.addUser(loginData);
  const loginResponse = new RequestData<LoginResponseData>(
    RequestTypes.REG,
    {
      name: loginData.name,
      index: index        
    }
  )
  ws.send(JsonService.stringifyResponse(loginResponse), () => {
    const updateWinnersRes = new RequestData<WinnerData[]>(
      RequestTypes.UPDATE_WINNERS,
      DataBase.getWinner(),
    )
    const updateRoomsRes = new RequestData<Room[]>(
      RequestTypes.UPDATE_ROOM,
      DataBase.getRooms(),
    )
    ws.send(JsonService.stringifyResponse(updateRoomsRes))
    ws.send(JsonService.stringifyResponse(updateWinnersRes))
  })
}