export declare class v2_LeaderboardCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param season Season ID (optional)
     * @param name Player name to search for (optional)
     * @param tag Player tag to search for (optional)
     * @param puuid Player UUID to search for (optional)
     * @returns Leaderboard retrieved successfully
     */
    get(affinity: string, season?: string, name?: string, tag?: string, puuid?: string): Promise<import("../../types/response.type").DefaultErrorsResponse | import("./getLeaderboard").v2_getLeaderboard_ResponseData>;
}
