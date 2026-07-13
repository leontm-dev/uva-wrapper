import { doApiRequest } from "../../lib/request-handler";

export async function v1_getPremierTeamById(
  apiKey: string,
  id: string,
  season?: string,
  affinity?: string,
) {
  return await doApiRequest<v1_getPremierTeamById_ResponseData>(
    apiKey,
    `/v1/premier/${id}`,
    { season, affinity },
    { method: "GET" },
  );
}
export interface v1_getPremierTeamById_ResponseData {
  customization: {
    icon: string;
    image: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  enrolled: boolean;
  id: string;
  member: {
    puuid: string;
    name: string;
    tag: string;
  }[];
  name: string;
  placement: {
    conference: string;
    division: number;
    place: number;
    points: number;
  };
  ranked: boolean;
  stats: {
    losses: number;
    matches: number;
    rounds_lost: number;
    rounds_won: number;
    wins: number;
  };
  tag: string;
}
