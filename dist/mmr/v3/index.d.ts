export declare class v3_MMRCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v3
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR data retrieved successfully
     */
    getByName(affinity: string, platform: string, name: string, tag: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMMRByName").v3_getMMRByName_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-puuid-v3
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @returns MMR data retrieved successfully
     */
    getByPuuid(affinity: string, platform: string, puuid: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMMRByPuuid").v3_getMMRByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
