import { IncomingMessage, ServerResponse } from "http";

export const getLisEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ name: "Guilherme" }));
};
