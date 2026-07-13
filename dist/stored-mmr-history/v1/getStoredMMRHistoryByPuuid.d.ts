import { DefaultApiResponse, DefaultErrorsResponse } from "../../types/response.type";
export declare function v1_getStoredMMRHistoryByPuuid(apiKey: string, affinity: string, puuid: string, size?: number): Promise<DefaultErrorsResponse | (DefaultApiResponse<v1_getStoredMMRHistoryByPuuid[]> & {
    results: {
        after: number;
        before: number;
        returned: number;
        total: number;
    };
})>;
export interface v1_getStoredMMRHistoryByPuuid {
    date: string;
    elo: number;
    last_mmr_change: number;
    map: {
        id: string;
        name: string;
    };
    match_id: string;
    ranking_in_tier: number;
    season: {
        id: string;
        short: string;
    };
    tier: {
        id: number;
        name: string;
    };
}
