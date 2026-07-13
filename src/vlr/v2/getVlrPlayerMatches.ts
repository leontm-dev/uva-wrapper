import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrPlayerMatches(
  apiKey: string,
  player: number,
  page?: number,
) {
  return await doApiRequest<v2_getVlrPlayerMatches_ResponseData[]>(
    apiKey,
    `/v2/esports/vlr/players/${player}/matches`,
    {
      page: page?.toString(),
    },
  );
}
export interface v2_getVlrPlayerMatches_ResponseData {
  league: {
    icon: string;
    name: string;
    series: string;
  };
  match: {
    id: number;
    slug: string;
  };
  teams: [
    {
      icon: string;
      name: string;
      tag: string;
      score: number | null;
    },
  ];
  vods: string[];
  date: string | null;
}
