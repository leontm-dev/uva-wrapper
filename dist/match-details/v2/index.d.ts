export declare class v2_MatchDetailsCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-match-details-v2
     * @param matchId Match UUID
     * @returns Match details retrieved successfully
     */
    get(matchId: string): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
}
