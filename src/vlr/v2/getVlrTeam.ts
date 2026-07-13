import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrTeam(apiKey: string, teamId: number) {
  return await doApiRequest<v2_getVlrTeam_ResponseData>(
    apiKey,
    `/v2/esports/vlr/teams/${teamId}`,
    {},
    { method: "GET" },
  );
}

export interface v2_getVlrTeam_ResponseData {
  event_placements: {
    event: {
      id: number;
      name: string;
      slug: string;
    };
    placements: {
      placement: string;
      stage: string;
      prize: string | null;
      team: string | null;
    }[];
    year: string;
  }[];
  id: number;
  name: string;
  roster: {
    alias: string;
    id: number;
    is_captain: boolean;
    role: string;
    avatar: string | null;
    country_code: string | null;
    real_name: string | null;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
  country: {
    code: string;
    name: string;
  } | null;
  logo: string | null;
  tag: string | null;
  total_winnings: string | null;
}
