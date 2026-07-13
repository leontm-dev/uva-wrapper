import { doApiRequest } from "../../lib/request-handler";

export async function v1_getMMRByPuuid(
  apiKey: string,
  affinity: string,
  puuid: string,
) {
  return await doApiRequest<v1_getMMRByPuuid_ResponseData>(
    apiKey,
    `/v1/by-puuid/mmr/${affinity}/${puuid}`,
    {},
    { method: "GET" },
  );
}
export interface v1_getMMRByPuuid_ResponseData {
  currenttier: number;
  currenttierpatched: string;
  elo: number;
  images: {
    large: string;
    small: string;
    triangle_down: string;
    triangle_up: string;
  };
  mmr_change_to_last_game: number;
  name: string;
  old: boolean;
  ranking_in_tier: number;
  tag: string;
}
