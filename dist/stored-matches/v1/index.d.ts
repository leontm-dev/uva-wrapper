import { v1_getStoredMatchesByName } from "./getStoredMatchesByName";
import { v1_getStoredMatchesByPuuid } from "./getStoredMatchesByPuuid";
export declare class v1_StoredMatchesCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-matches-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @returns Stored match history retrieved successfully
     */
    getByName(affinity: string, name: string, tag: string, mode?: string, map?: string, size?: number): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<v1_getStoredMatchesByName[]> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-matches-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @returns Stored match history retrieved successfully
     */
    getByPuuid(affinity: string, puuid: string, mode?: string, map?: string, size?: number): Promise<import("../../types/response.type").DefaultErrorsResponse | (import("../../types/response.type").DefaultApiResponse<v1_getStoredMatchesByPuuid[]> & {
        results: {
            after: number;
            before: number;
            returned: number;
            total: number;
        };
    })>;
}
