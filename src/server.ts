import * as http from "http";

import {
  getFiltEpisodes,
  getLisEpisodes,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //listar podcasts
    if (request.method === "GET" && request.url === "/api/list") {
      await getLisEpisodes(request, response);
    }

    //filtrar podcast
    if (request.method === "GET" && request.url === "/api/episodes") {
      await getFiltEpisodes(request, response);
    }
  },
);

const port = process.env.PORT;

server.listen(port, () => {
  4;
  console.log(`servidor rodando na porta ${port}`);
});
