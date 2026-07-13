import { v1_getStoredMMRHistoryByName } from "./getStoredMMRHistoryByName";
import { v1_getStoredMMRHistoryByPuuid } from "./getStoredMMRHistoryByPuuid";
export declare class v1_StoredMMRHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param size Number of results (optional)
     * @returns Stored MMR history retrieved successfully
     */
    getByName(affinity: string, name: string, tag: string, size?: number): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<v1_getStoredMMRHistoryByName[]> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @param size Number of results (optional)
     * @returns Stored MMR history retrieved successfully
     */
    getByPuuid(affinity: string, puuid: string, size?: number): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<v1_getStoredMMRHistoryByPuuid[]> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
}
