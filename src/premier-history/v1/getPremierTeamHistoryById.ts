import { doApiRequest } from "../../lib/request-handler";

export async function v1_getPremierTeamHistoryById(
  apiKey: string,
  id: string,
  season?: string,
) {
  return await doApiRequest<v1_getPremierTeamHistoryById_ResponseData>(
    apiKey,
    `/valorant/v1/premier/${id}/history`,
    { season },
    { method: "GET" },
  );
}

export interface v1_getPremierTeamHistoryById_ResponseData {
  league_matches: {
    id: string;
    points_after: number;
    points_before: number;
    started_at: string;
  }[];
  tournament_matches: {
    matches: string[];
    placement: number;
    placement_league_bonus: number;
    points_after: number;
    points_before: number;
    tournament_id: string;
  }[];
}
