import { repositoryPodcast } from "../repositories/podcasts-repository"


export const serviceFilterEpisodes = async (podcastName:string | undefined) => {

  //localhost:1111/api/episodes?p=flow
  const queryString = podcastName?.split("?p=")[1] || "";

const data = await repositoryPodcast(queryString);

return data

}