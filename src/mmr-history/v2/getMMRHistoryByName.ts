import { doApiRequest } from "../../lib/request-handler";

export async function v2_getMMRHistoryByName(
  apiKey: string,
  affinity: string,
  platform: string,
  name: string,
  tag: string,
) {
  return await doApiRequest<v2_getMMRHistoryByName_ResponseData>(
    apiKey,
    `/v2/mmr-history/${affinity}/${platform}/${name}/${tag}`,
    {},
    { method: "GET" },
  );
}
export interface v2_getMMRHistoryByName_ResponseData {
  account: {
    name: string;
    puuid: string;
    tag: string;
  };
  history: {
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
  }[];
}
