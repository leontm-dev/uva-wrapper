export declare function v1_getPremierTeamHistoryById(apiKey: string, id: string, season?: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getPremierTeamHistoryById_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
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
