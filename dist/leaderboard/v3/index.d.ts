export declare class v3_LeaderboardCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v3
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param season Season ID (optional)
     * @param size Number of results per page (optional)
     * @param page Page number (optional)
     * @param name Player name to search for (optional)
     * @param tag Player tag to search for (optional)
     * @returns Leaderboard retrieved successfully
     */
    get(affinity: string, platform: string, season?: string, size?: number, page?: number, name?: string, tag?: string): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<import("./getLeaderboard").v3_getLeaderboard_ResponseData> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
}
