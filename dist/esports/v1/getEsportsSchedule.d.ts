export declare function v1_getEsportsSchedule(apiKey: string, region?: string, league?: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getEsportsSchedule_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getEsportsSchedule_ResponseData {
    date: string;
    league: {
        icon: string;
        identifier: string;
        name: string;
        region: string;
    };
    match: {
        game_type: {
            count: number;
            type: string;
        };
        teams: {
            code: string;
            game_wins: number;
            has_won: boolean;
            icon: string;
            name: string;
            record: {
                losses: number;
                wins: number;
            };
        }[];
        id: string;
    };
    state: string;
    tournament: {
        name: string;
        season: string;
    };
    type: string;
    vod: string;
}
