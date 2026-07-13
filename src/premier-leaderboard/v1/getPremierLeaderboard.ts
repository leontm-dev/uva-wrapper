import { doApiRequest } from "../../lib/request-handler";

export async function v1_getPremierLeaderboard(
  apiKey: string,
  affinity: string,
  conference?: string,
  division?: string,
  season?: string,
) {
  return await doApiRequest<v1_getPremierLeaderboard_ResponseData[]>(
    apiKey,
    `/valorant/v1/premier/leaderboard/${affinity}`,
    { conference, division, season },
    { method: "GET" },
  );
}
export interface v1_getPremierLeaderboard_ResponseData {
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
  ranked: boolean;
  ranking: number;
  region: string;
  score: number;
  tag: string;
  updated_at: string;
  wins: number;
}
