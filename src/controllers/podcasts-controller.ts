import { IncomingMessage, ServerResponse } from "http";

export const getLisEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify([ {
        podcastName: "flow",
        episode: "Fernando Yunes",
        videoId:"k3XinCZ0u5g",
        categoria: ['negocios']
    
    },
    {
         podcastName: "flow",
        episode: "Germano Couy",
        videoId: "kBi_0cp_P4g",
        categoria: ['tecnologia, negocios']
    }]
   ));
};
