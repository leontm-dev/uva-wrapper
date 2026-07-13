import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v3_getLeaderboard(
  apiKey: string,
  affinity: string,
  platform: string,
  season?: string,
  size?: number,
  page?: number,
  name?: string,
  tag?: string,
) {
  return (await doApiRequest(
    apiKey,
    `/valorant/v3/leaderboard/${affinity}/${platform}`,
    { season, size: size?.toString(), page: page?.toString(), name, tag },
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v3_getLeaderboard_ResponseData> & {
        results: {
          after: number;
          before: number;
          returned: number;
          total: number;
        };
      })
    | DefaultErrorsResponse;
}
export interface v3_getLeaderboard_ResponseData {
  players: {
    card: string;
    is_anonymized: boolean;
    is_banned: boolean;
    leaderboard_rank: number;
    name: string;
    rr: number;
    tag: string;
    tier: number;
    title: string;
    updated_at: string;
    wins: number;
    puuid: string | null;
  }[];
  thresholds: {
    start_index: number;
    threshold: number;
    tier: {
      id: number;
      name: string;
    };
  }[];
  updated_at: string;
}
