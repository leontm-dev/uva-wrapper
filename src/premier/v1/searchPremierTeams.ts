import { doApiRequest } from "../../lib/request-handler";

export async function v1_searchPremierTeams(
  apiKey: string,
  name?: string,
  tag?: string,
  id?: string,
  season?: string,
) {
  return await doApiRequest<v1_searchPremierTeams_Response_Data[]>(
    apiKey,
    "/v1/premier/search",
    { name, tag, id, season },
    { method: "GET" },
  );
}

export interface v1_searchPremierTeams_Response_Data {
  affinity: string;
  conference: string;
  customization: {
    icon: string;
    image: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  division: number;
  id: string;
  losses: number;
  name: string;
  ranked: true;
  ranking: number;
  region: string;
  score: number;
  tag: string;
  updated_at: string;
  wins: number;
}
