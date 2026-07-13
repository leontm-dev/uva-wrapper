export declare class v1_PremierCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/search-premier-teams-v1
     * @param name Team name to search for (optional)
     * @param tag Team tag to search for (optional)
     * @param id Team UUID to search for (optional)
     * @param season Premier season id (optional)
     * @returns Premier team search results retrieved successfully
     */
    search(name?: string, tag?: string, id?: string, season?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./searchPremierTeams").v1_searchPremierTeams_Response_Data[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-by-id-v1
     * @param id Team UUID
     * @param season Premier season id (optional)
     * @param affinity Region/affinity for fallback resolution (optional)
     * @returns Premier team data retrieved successfully
     */
    getById(id: string, season?: string, affinity?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getPremierTeamById").v1_getPremierTeamById_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-by-name-v1
     * @param name Team name
     * @param tag Team tag
     * @param season Premier season id (optional)
     * @param affinity Region/affinity for fallback resolution (optional)
     * @returns Premier team data retrieved successfully
     */
    getByName(name: string, tag: string, season?: string, affinity?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getPremierTeamByName").v1_getPremierTeamByName_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
