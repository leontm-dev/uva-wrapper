import { doApiRequest } from "../../lib/request-handler";

export async function v1_getMMRByName(
  apiKey: string,
  affinity: string,
  name: string,
  tag: string,
) {
  return await doApiRequest<v1_getMMRByName_ResponseData>(
    apiKey,
    `/valorant/v1/mmr/${affinity}/${name}/${tag}`,
    {},
    { method: "GET" },
  );
}
export interface v1_getMMRByName_ResponseData {
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
