export declare class v1_MiscCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-content-v1
     * @param locale Locale code (e.g., en-US, de-DE) - optional
     * @returns Content retrieved successfully
     */
    getContent(locale?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getContent").v1_getContent_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-status-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @returns Status retrieved successfully
     */
    getStatus(affinity: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getStatus").v1_getStatus_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-queue-status-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @returns Queue status retrieved successfully
     */
    getQueueStatus(affinity: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getQueueStatus").v1_getQueueStatus_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-game-version-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @returns Version data retrieved successfully
     */
    getGameVersion(affinity: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getGameVersion").v1_getGameVersion_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-website-content-v1
     * @param countryCode Country code (e.g., en-us, de-de)
     * @param category Category filter (optional)
     * @returns Website content retrieved successfully
     */
    getWebsiteContent(countryCode: string, category?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getWebsiteContent").v1_getWebsiteContent_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-website-entry-by-id-v1
     * @param dbId Database ID of the website entry
     * @param countryCode Country code (e.g., en-us, de-de)
     * @returns Website entry retrieved successfully
     */
    getWebsiteEntryById(dbId: string, countryCode: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getWebsiteEntryById").v1_getWebsiteEntryById_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-raw-riot-api-data-v1
     * @param region
     * @param type
     * @param value
     * @param platform
     * @param queries
     * @returns Raw Riot API data retrieved successfully
     */
    getRawRiotAPIData(region: string, type: string, value: string | string[], platform: string | null, queries: string | null): Promise<import("../../types/response.type").DefaultApiResponse<unknown[]> | import("../../types/response.type").DefaultErrorsResponse>;
}
