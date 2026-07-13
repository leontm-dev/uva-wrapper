export declare function v2_getVlrPlayerMatches(apiKey: string, player: number, page?: number): Promise<import("../../types/response.type").DefaultApiResponse<v2_getVlrPlayerMatches_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getVlrPlayerMatches_ResponseData {
    league: {
        icon: string;
        name: string;
        series: string;
    };
    match: {
        id: number;
        slug: string;
    };
    teams: [
        {
            icon: string;
            name: string;
            tag: string;
            score: number | null;
        }
    ];
    vods: string[];
    date: string | null;
}
