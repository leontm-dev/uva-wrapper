import { v2_getStoredMMRHistoryByName } from "./getStoredMMRHistoryByName";
import { v2_getStoredMMRHistoryByPuuid } from "./getStoredMMRHistoryByPuuid";
export declare class v2_StoredMMRHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-name-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID name
     * @param size Number of results (optional)
     * @returns Stored MMR history retrieved successfully
     */
    getByName(affinity: string, platform: string, name: string, tag: string, size?: number): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<v2_getStoredMMRHistoryByName[]> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-puuid-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @param size Number of results (optional)
     * @returns Stored MMR history retrieved successfully
     */
    getByPuuid(affinity: string, platform: string, puuid: string, size?: number): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<v2_getStoredMMRHistoryByPuuid[]> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
}
