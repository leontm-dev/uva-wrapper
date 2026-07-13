export declare function v1_getPremierTeamById(apiKey: string, id: string, season?: string, affinity?: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getPremierTeamById_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getPremierTeamById_ResponseData {
    customization: {
        icon: string;
        image: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
    enrolled: boolean;
    id: string;
    member: {
        puuid: string;
        name: string;
        tag: string;
    }[];
    name: string;
    placement: {
        conference: string;
        division: number;
        place: number;
        points: number;
    };
    ranked: boolean;
    stats: {
        losses: number;
        matches: number;
        rounds_lost: number;
        rounds_won: number;
        wins: number;
    };
    tag: string;
}
