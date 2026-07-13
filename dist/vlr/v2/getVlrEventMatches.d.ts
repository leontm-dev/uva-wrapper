export declare function v2_getVlrEventMatches(apiKey: string, eventId: number): Promise<import("../../types/response.type").DefaultApiResponse<v2_getVlrEventMatches_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getVlrEventMatches_ResponseData {
    event: string;
    id: number;
    series: string;
    slug: string;
    tags: string[];
    teams: {
        is_winner: boolean;
        name: string;
        score: number | null;
    }[];
    date: string;
}
