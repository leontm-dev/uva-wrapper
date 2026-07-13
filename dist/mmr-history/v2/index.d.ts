export declare class v2_MMRHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-name-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR history retrieved successfully
     */
    getByName(affinity: string, platform: string, name: string, tag: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMMRHistoryByName").v2_getMMRHistoryByName_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-puuid-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @returns MMR history retrieved successfully
     */
    getByPuuid(affinity: string, platform: string, puuid: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMMRHistoryByPuuid").v2_getMMRHistoryByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
