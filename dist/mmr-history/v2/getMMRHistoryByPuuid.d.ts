export declare function v2_getMMRHistoryByPuuid(apiKey: string, affinity: string, platform: string, puuid: string): Promise<import("../../types/response.type").DefaultApiResponse<v2_getMMRHistoryByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getMMRHistoryByPuuid_ResponseData {
    account: {
        name: string;
        puuid: string;
        tag: string;
    };
    history: {
        date: string;
        elo: number;
        last_change: number;
        map: {
            id: string;
            name: string;
        };
        match_id: string;
        refunded_rr: number;
        rr: number;
        season: {
            id: string;
            short: string;
        };
        tier: {
            id: number;
            name: string;
        };
        was_derank_protected: boolean;
    }[];
}
