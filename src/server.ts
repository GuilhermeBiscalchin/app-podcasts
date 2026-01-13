import * as http from "http";

import { getLisEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
 async (request: http.IncomingMessage, response: http.ServerResponse) => {

if(request.method === 'GET'){
  await getLisEpisodes(request,response)
}

  }
);

const port = process.env.PORT;

server.listen(port, () => {
  4;
  console.log(`servidor rodando na porta ${port}`);
});
