import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v1_getMMRHistoryByName(
  apiKey: string,
  affinity: string,
  name: string,
  tag: string,
) {
  return (await doApiRequest(
    apiKey,
    `/valorant/valorant/v1/mmr-history/${affinity}/${name}/${tag}`,
    {},
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v1_getMMRHistoryByName_ResponseData[]> & {
        name: string;
        tag: string;
      })
    | DefaultErrorsResponse;
}
export interface v1_getMMRHistoryByName_ResponseData {
  currenttier: number;
  currenttierpatched: string;
  date: string;
  date_raw: number;
  elo: number;
  images: {
    large: string;
    small: string;
    triangle_down: string;
    triangle_up: string;
  };
  map: { id: string; name: string };
  match_id: string;
  mmr_change_to_last_game: number;
  ranking_in_tier: number;
  season_id: string;
}
