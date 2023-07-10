import { httpServer } from "./http_server/index.js";
import { WebSocketServer } from "ws"
import { RequestData } from './types/request-data.js';
import { RequestTypes } from './enums/request-data-types.enum.js';
import { LoginData } from './types/login.interface.js';
import { LoginResponseData } from './types/login-response.interface.js';
import { json } from 'stream/consumers';
import { JsonService } from './services/json-service.js';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 3000;

const users: LoginData[] = []

const ws_server = new WebSocketServer({
  port: WS_PORT
}, () => console.log(`WebSocket server run on port: ${WS_PORT}`))
ws_server.on('connection', (ws) => {
  console.log(`New connection with websocket established`)
  ws.on("message", (message: ArrayBuffer) => {
    const req = JsonService.parseRequest(message.toString())
    if (req.type === RequestTypes.REG) {
      users.push(req.data as LoginData)
      let index = users.length - 1;
      const loginResponse = new RequestData<LoginResponseData>(
        RequestTypes.REG,
        {
          name: req.data.name,
          index: index        
        }
      )
      ws.send(JsonService.stringifyResponse(loginResponse))
    }
  })
})

