export declare function v1_getQueueStatus(apiKey: string, affinity: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getQueueStatus_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getQueueStatus_ResponseData {
    enabled: boolean;
    game_rules: {
        allow_drop_out: boolean;
        allow_lenient_surrender: boolean;
        allow_overtime_draw_vote: boolean;
        assign_random_agents: boolean;
        overtime_win_by_two: boolean;
        overtime_win_by_two_capped: boolean;
        premier_mode: boolean;
        skip_pregame: boolean;
    };
    high_skill: {
        max_party_size: number;
        max_tier: number;
        min_tier: number;
    };
    maps: {
        enabled: boolean;
        map: {
            id: string;
            name: string;
        };
    }[];
    mode: string;
    mode_id: string;
    number_of_teams: number;
    party_size: {
        full_party_bypass: boolean;
        invalid: number[];
        max: number;
        min: number;
    };
    platforms: string[];
    ranked: boolean;
    required_account_level: number;
    skill_disparity: {
        max_tier: {
            id: 1;
            name: string;
        };
        name: string;
        tier: number;
    }[];
    team_size: number;
    tournament: boolean;
}
