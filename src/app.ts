import * as http from "http";

import {
  getFiltEpisodes,
  getLisEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/route";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  const [baseUrl] = request.url?.split("?") ?? ["", ""];

  //listar podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getLisEpisodes(request, response);
  }

  //filtrar podcast
  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
    await getFiltEpisodes(request, response);
  }
};
