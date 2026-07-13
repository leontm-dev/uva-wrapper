import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrPlayer(
  apiKey: string,
  player: number,
  timespan?: "30d" | "60d" | "90d" | "all",
) {
  return await doApiRequest(
    apiKey,
    `/valorant/v2/esports/vlr/players/${player}`,
    { timespan },
    { method: "GET" },
  );
}

export interface v2_getVlrPlayer_ResponseData {
  agent_stats: {
    agent: string;
    stats: {
      acs: number;
      adr: number;
      apr: number;
      assists: number;
      deaths: number;
      fdpr: number;
      first_deaths: number;
      first_kills: number;
      fkpr: number;
      kast: number;
      kd: number;
      kills: number;
      kpr: number;
      rating: number;
    };
    usage: {
      count: number;
      percentage: number;
      rounds: number;
    };
  }[];
  current_teams: {
    id: number;
    logo: string;
    name: string;
  }[];
  event_placements: {
    event: {
      id: number;
      name: string;
      slug: string;
    };
    placements: {
      placement: string;
      stage: string;
      prize: string;
      team: string;
    }[];
    year: string;
  }[];
  id: number;
  name: string;
  past_teams: {
    id: number;
    logo: string;
    name: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
  avatar: string;
  country: {
    code: string;
    name: string;
  };
  real_name: string;
  total_winnings: string;
}
