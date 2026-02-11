import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const getLisEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  const content = await serviceListEpisodes();
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};

export const getFiltEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  //localhost:1111/api/episodes?p=flow
  const queryString = request.url?.split("?p=")[1] || "";

  const content = await serviceFilterEpisodes(queryString);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};
