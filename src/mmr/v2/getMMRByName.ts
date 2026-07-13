import { doApiRequest } from "../../lib/request-handler";

export async function v2_getMMRByName(
  apiKey: string,
  affinity: string,
  name: string,
  tag: string,
) {
  return await doApiRequest<v2_getMMRByName_ResponseData>(
    apiKey,
    `/v2/mmr/${affinity}/${name}/${tag}`,
    {},
    { method: "GET" },
  );
}
export interface v2_getMMRByName_ResponseData {
  by_season: unknown;
  current_data: {
    currenttier: number;
    currenttierpatched: string;
    elo: number;
    games_needed_for_rating: number;
    images: {
      large: string;
      small: string;
      triangle_down: string;
      triangle_up: string;
    };
    mmr_change_to_last_game: number;
    old: boolean;
    ranking_in_tier: number;
  };
  highest_rank: {
    old: boolean;
    patched_tier: string;
    season: string;
    tier: number;
  };
  name: string;
  puuid: string;
  tag: string;
}
