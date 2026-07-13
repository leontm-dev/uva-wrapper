export declare function v2_getVlrTeamMatches(apiKey: string, teamId: number, page?: number): Promise<import("../../types/response.type").DefaultApiResponse<v2_getVlrTeamMatches_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getVlrTeamMatches_ResponseData {
    league: {
        icon: string;
        name: string;
        series: string;
    };
    match: {
        id: number;
        slug: string;
    };
    teams: {
        logo: string;
        name: string;
        tag: string;
        score: number;
    }[];
    vods: string[];
    date: string;
}
