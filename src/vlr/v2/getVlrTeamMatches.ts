import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrTeamMatches(
  apiKey: string,
  teamId: number,
  page?: number,
) {
  return await doApiRequest<v2_getVlrTeamMatches_ResponseData[]>(
    apiKey,
    `/valorant/v2/esports/vlr/teams/${teamId}/matches`,
    {
      page: page?.toString(),
    },
  );
}
export interface v2_getVlrTeamMatches_ResponseData {
  league: {
    icon: string;
    name: string;
    series: string;
  };
  match: {
    id: number;
    slug: string;
  };
  teams: {
    logo: string;
    name: string;
    tag: string;
    score: number;
  }[];
  vods: string[];
  date: string;
}
