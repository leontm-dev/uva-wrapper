export declare function v1_searchPremierTeams(apiKey: string, name?: string, tag?: string, id?: string, season?: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_searchPremierTeams_Response_Data[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_searchPremierTeams_Response_Data {
    affinity: string;
    conference: string;
    customization: {
        icon: string;
        image: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
    division: number;
    id: string;
    losses: number;
    name: string;
    ranked: true;
    ranking: number;
    region: string;
    score: number;
    tag: string;
    updated_at: string;
    wins: number;
}
