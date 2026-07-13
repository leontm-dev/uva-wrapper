export declare function v2_getMMRByPuuid(apiKey: string, affinity: string, puuid: string): Promise<import("../../types/response.type").DefaultApiResponse<v2_getMMRByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getMMRByPuuid_ResponseData {
    by_season: unknown;
    current_data: {
        currenttier: number;
        currenttierpatched: string;
        elo: number;
        games_needed_for_rating: number;
        images: {
            large: string;
            small: string;
            triangle_down: string;
            triangle_up: string;
        };
        mmr_change_to_last_game: number;
        old: boolean;
        ranking_in_tier: number;
    };
    highest_rank: {
        old: boolean;
        patched_tier: string;
        season: string;
        tier: number;
    };
    name: string;
    puuid: string;
    tag: string;
}
