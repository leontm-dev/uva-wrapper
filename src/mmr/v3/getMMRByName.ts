import { doApiRequest } from "../../lib/request-handler";

export async function v3_getMMRByName(
  apiKey: string,
  affinity: string,
  platform: string,
  name: string,
  tag: string,
) {
  return await doApiRequest<v3_getMMRByName_ResponseData>(
    apiKey,
    `/valorant/v3/mmr/${affinity}/${platform}/${name}/${tag}`,
    {},
    { method: "GET" },
  );
}
export interface v3_getMMRByName_ResponseData {
  account: {
    name: string;
    puuid: string;
    tag: string;
  };
  current: {
    elo: number;
    games_needed_for_rating: number;
    last_change: number;
    rank_protection_shields: number;
    rr: number;
    tier: {
      id: number;
      name: string;
    };
    leaderboard_placement: {
      /**
       * Required range: x >= 0
       */
      rank: number;
      updated_at: string;
    } | null;
  };
  seasonal: {
    act_wins: { id: number; name: string }[];
    end_rr: number;
    end_tier: { id: number; name: string };
    games: number;
    ranking_schema: string;
    season: {
      id: string;
      short: string;
    };
    wins: number;
    leaderboard_placement: {
      /**
       * Required range: x >= 0
       */
      rank: number;
      updated_at: string;
    } | null;
  }[];
  peak: {
    ranking_schema: string;
    rr: number;
    season: {
      id: string;
      short: string;
    };
    tier: {
      id: number;
      name: string;
    };
  } | null;
}
