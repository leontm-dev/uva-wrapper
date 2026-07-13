import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v1_getStoredMMRHistoryByName(
  apiKey: string,
  affinity: string,
  name: string,
  tag: string,
  size?: number,
) {
  return (await doApiRequest(
    apiKey,
    `/valorant/v1/stored-mmr-history/${affinity}/${name}/${tag}`,
    { size: size?.toString() },
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v1_getStoredMMRHistoryByName[]> & {
        results: {
          after: number;
          before: number;
          returned: number;
          total: number;
        };
      })
    | DefaultErrorsResponse;
}
export interface v1_getStoredMMRHistoryByName {
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
