import { httpServer } from "./http_server/index.js";
import { WebSocketServer } from "ws"

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 3000;

const ws_server = new WebSocketServer({
  port: WS_PORT
})

ws_server.on('connection', (ws) => {
  ws.send("OK")
  console.log("url", ws.url)
  ws.on("message", (message) => {
    const data = JSON.parse(message.toString())
    console.log(data, data)
  })
})

