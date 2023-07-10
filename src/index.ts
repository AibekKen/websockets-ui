import { httpServer } from "./http_server/index.js";
import { WebSocketServer } from "ws"
import { wsHandler } from './controls/main.js';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 3000;

const ws_server = new WebSocketServer({
  port: WS_PORT
}, () => console.log(`WebSocket server run on port: ${WS_PORT}`))
let connection = 0;
ws_server.on('connection', wsHandler)
ws_server.on('close', () => console.log('disconnected'))
ws_server.on('error', (error) => console.log(`disconnected with error: ${error}`))

