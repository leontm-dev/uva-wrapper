export declare class v4_MatchDetailsCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-match-details-v4
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param matchId Match UUID
     * @returns Match details retrieved successfully
     */
    get(affinity: string, matchId: string): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
}
