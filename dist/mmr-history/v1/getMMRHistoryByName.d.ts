import { DefaultApiResponse, DefaultErrorsResponse } from "../../types/response.type";
export declare function v1_getMMRHistoryByName(apiKey: string, affinity: string, name: string, tag: string): Promise<DefaultErrorsResponse | (DefaultApiResponse<v1_getMMRHistoryByName_ResponseData[]> & {
    name: string;
    tag: string;
})>;
export interface v1_getMMRHistoryByName_ResponseData {
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
