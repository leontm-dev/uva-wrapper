export declare function v2_getVlrTeamTransactions(apiKey: string, teamId: number): Promise<import("../../types/response.type").DefaultApiResponse<v2_getVlrTeamTransactions_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getVlrTeamTransactions_ResponseData {
    action: string;
    player: {
        alias: string;
        id: number;
        slug: string;
        country_code: string;
        real_name: string;
    };
    position: string;
    date: string;
    reference_url: string;
}
