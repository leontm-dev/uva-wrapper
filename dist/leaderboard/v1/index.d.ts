export declare class v1_LeaderboardCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param season Season ID (optional)
     * @param name Player name to search for (optional)
     * @param tag Player tag to search for (optional)
     * @returns Leaderboard retrieved successfully
     */
    get(affinity: string, season?: string, name?: string, tag?: string): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
}
