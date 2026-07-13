export declare class v1_MMRHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR history retrieved successfully
     */
    getByName(affinity: string, name: string, tag: string): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<import("./getMMRHistoryByName").v1_getMMRHistoryByName_ResponseData[]> & {
        name: string;
        tag: string;
    })>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @returns MMR history retrieved successfully
     */
    getByPuuid(affinity: string, puuid: string): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<import("./getMMRHistoryByPuuid").v1_getMMRHistoryByPuuid_ResponseData[]> & {
        name: string;
        tag: string;
    })>;
}
