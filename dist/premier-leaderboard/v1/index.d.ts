export declare class v1_PremierLeaderboardCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-leaderboard-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param conference Conference filter (optional)
     * @param division Division filter (optional)
     * @param season Premier season id (optional)
     * @returns Premier leaderboard retrieved successfully
     */
    get(affinity: string, conference?: string, division?: string, season?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getPremierLeaderboard").v1_getPremierLeaderboard_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
}
