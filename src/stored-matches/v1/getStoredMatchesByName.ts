import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v1_getStoredMatchesByName(
  apiKey: string,
  affinity: string,
  name: string,
  tag: string,
  mode?: string,
  map?: string,
  size?: number,
) {
  return (await doApiRequest(
    apiKey,
    `/valorant/v1/stored-matches/${affinity}/${name}/${tag}`,
    { mode, map, size: size?.toString() },
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v1_getStoredMatchesByName[]> & {
        results: {
          after: number;
          before: number;
          returned: number;
          total: number;
        };
      })
    | DefaultErrorsResponse;
}

export interface v1_getStoredMatchesByName {
  meta: {
    id: string;
    map: {
      id: string;
      name: string;
    };
    mode: string;
    region: string;
    season: {
      id: string;
      short: string;
    };
    started_at: string;
    version: string;
    cluster: string | null;
  };
  stats: {
    assists: number;
    character: {
      id: string;
      name: string;
    };
    damage: {
      made: number;
      received: number;
    };
    deaths: number;
    kills: number;
    level: number;
    puuid: string;
    score: number;
    shots: {
      body: number;
      head: number;
      leg: number;
    };
    team: string;
    tier: number;
    name: string | null;
    tag: string | null;
  };
  teams: {
    blue: number;
    red: number;
  };
}
