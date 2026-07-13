export declare class v4_MatchesCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-name-v4
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @param start Start index for pagination (optional)
     * @returns Match history retrieved successfully
     */
    getByName(affinity: string, platform: string, name: string, tag: string, mode?: string, map?: string, size?: number, start?: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMatchesByName").v4_getMatchesByName_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-puuid-v4
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @param start Start index for pagination (optional)
     * @returns Match history retrieved successfully
     */
    getByPuuid(affinity: string, platform: string, puuid: string, mode?: string, map?: string, size?: number, start?: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMatchesByPuuid").v4_getMatchesByPuuid_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
}
