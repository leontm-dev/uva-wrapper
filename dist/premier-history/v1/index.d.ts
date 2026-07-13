export declare class v1_PremierHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-history-by-name-v1
     * @param name Team name
     * @param tag Team tag
     * @param season Premier season id (optional)
     * @returns Premier team history retrieved successfully
     */
    getByName(name: string, tag: string, season?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getPremierTeamHistoryByName").v1_getPremierTeamHistoryByName_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-history-by-id-v1
     * @param id Team UUID
     * @param season Premier season id (optional)
     * @returns Premier team history retrieved successfully
     */
    getById(id: string, season?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getPremierTeamHistoryById").v1_getPremierTeamHistoryById_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
