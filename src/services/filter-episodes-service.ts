import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined,
):Promise<PodcastTransferModel> => {
  //localhost:1111/api/episodes?p=flow
  const queryString = podcastName?.split("?p=")[1] || "";

  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodcast(queryString);

  //verificar se tem conteúdo na requisição.
  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;

  return responseFormat;
};
