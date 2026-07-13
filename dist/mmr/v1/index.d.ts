export declare class v1_MMRCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR data retrieved successfully
     */
    getByName(affinity: string, name: string, tag: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMMRByName").v1_getMMRByName_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @returns MMR data retrieved successfully
     */
    getByPuuid(affinity: string, puuid: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getMMRByPuuid").v1_getMMRByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
