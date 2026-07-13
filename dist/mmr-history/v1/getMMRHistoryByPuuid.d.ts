import { DefaultApiResponse, DefaultErrorsResponse } from "../../types/response.type";
export declare function v1_getMMRHistoryByPuuid(apiKey: string, affinity: string, puuid: string): Promise<DefaultErrorsResponse | (DefaultApiResponse<v1_getMMRHistoryByPuuid_ResponseData[]> & {
    name: string;
    tag: string;
})>;
export interface v1_getMMRHistoryByPuuid_ResponseData {
    currenttier: number;
    currenttierpatched: string;
    date: string;
    date_raw: number;
    elo: number;
    images: {
        large: string;
        small: string;
        triangle_down: string;
        triangle_up: string;
    };
    map: {
        id: string;
        name: string;
    };
    match_id: string;
    mmr_change_to_last_game: number;
    ranking_in_tier: number;
    season_id: string;
}
