import { doApiRequest } from "../../lib/request-handler";

export async function v2_getMMRHistoryByPuuid(
  apiKey: string,
  affinity: string,
  platform: string,
  puuid: string,
) {
  return await doApiRequest<v2_getMMRHistoryByPuuid_ResponseData>(
    apiKey,
    `/valorant/v2/by-puuid/mmr-history/${affinity}/${platform}/${puuid}`,
    {},
    { method: "GET" },
  );
}
export interface v2_getMMRHistoryByPuuid_ResponseData {
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
