import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v1_getStoredMMRHistoryByPuuid(
  apiKey: string,
  affinity: string,
  puuid: string,
  size?: number,
) {
  return (await doApiRequest(
    apiKey,
    `/valorant/v1/by-puuid/stored-mmr-history/${affinity}/${puuid}`,
    { size: size?.toString() },
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v1_getStoredMMRHistoryByPuuid[]> & {
        results: {
          after: number;
          before: number;
          returned: number;
          total: number;
        };
      })
    | DefaultErrorsResponse;
}
export interface v1_getStoredMMRHistoryByPuuid {
  date: string;
  elo: number;
  last_mmr_change: number;
  map: {
    id: string;
    name: string;
  };
  match_id: string;
  ranking_in_tier: number;
  season: {
    id: string;
    short: string;
  };
  tier: {
    id: number;
    name: string;
  };
}
