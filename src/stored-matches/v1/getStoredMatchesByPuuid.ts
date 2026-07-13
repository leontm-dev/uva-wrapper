import { doApiRequest } from "../../lib/request-handler";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../../types/response.type";

export async function v1_getStoredMatchesByPuuid(
  apiKey: string,
  affinity: string,
  puuid: string,
  mode?: string,
  map?: string,
  size?: number,
) {
  return (await doApiRequest(
    apiKey,
    `/v1/by-puuid/stored-matches/${affinity}/${puuid}`,
    { mode, map, size: size?.toString() },
    { method: "GET" },
  )) as
    | (DefaultApiResponse<v1_getStoredMatchesByPuuid[]> & {
        results: {
          after: number;
          before: number;
          returned: number;
          total: number;
        };
      })
    | DefaultErrorsResponse;
}

export interface v1_getStoredMatchesByPuuid {
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
