import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v2_getStoredMMRHistoryByName(
  apiKey: string,
  affinity: string,
  platform: string,
  name: string,
  tag: string,
  size?: number,
) {
  return (await doApiRequest(
    apiKey,
    `/v2/stored-mmr-history/${affinity}/${platform}/${name}/${tag}`,
    { size: size?.toString() },
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v2_getStoredMMRHistoryByName[]> & {
        results: {
          after: number;
          before: number;
          returned: number;
          total: number;
        };
      })
    | DefaultErrorsResponse;
}
export interface v2_getStoredMMRHistoryByName {
  date: string;
  elo: number;
  last_change: number;
  map: {
    id: string;
    name: string;
  };
  match_id: string;
  refunded_rr: number;
  rr: number;
  season: {
    id: string;
    short: string;
  };
  tier: {
    id: number;
    name: string;
  };
  was_derank_protected: boolean;
}
