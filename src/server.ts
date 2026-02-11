import * as http from "http";

import {
  getFiltEpisodes,
  getLisEpisodes,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString ?v=valor
    //localhost:1111/api/episodes?p=flow

    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
     
    
    //console.log(baseUrl)
    //console.log(queryString)

    
    //listar podcasts
    if (request.method === "GET" && baseUrl === "/api/list") {
      await getLisEpisodes(request, response);
    }

    //filtrar podcast
    if (request.method === "GET" && baseUrl === "/api/episodes") {
      await getFiltEpisodes(request, response);
    }
  },
);

const port = process.env.PORT;

server.listen(port, () => {
  4;
  console.log(`servidor rodando na porta ${port}`);
});
