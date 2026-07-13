import { doApiRequest } from "../../lib/request-handler";

export async function v1_getEsportsSchedule(
  apiKey: string,
  region?: string,
  league?: string,
) {
  return await doApiRequest<v1_getEsportsSchedule_ResponseData[]>(
    apiKey,
    "/valorant/v1/esports/schedule",
    { region, league },
    { method: "GET" },
  );
}

export interface v1_getEsportsSchedule_ResponseData {
  date: string;
  league: {
    icon: string;
    identifier: string;
    name: string;
    region: string;
  };
  match: {
    game_type: {
      count: number;
      type: string;
    };
    teams: {
      code: string;
      game_wins: number;
      has_won: boolean;
      icon: string;
      name: string;
      record: {
        losses: number;
        wins: number;
      };
    }[];
    id: string;
  };
  state: string;
  tournament: {
    name: string;
    season: string;
  };
  type: string;
  vod: string;
}
