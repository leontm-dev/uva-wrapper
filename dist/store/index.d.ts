export declare class StoreCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-featured-store-items
     * @param version API version (v1, v2)
     * @returns Store featured items retrieved successfully
     */
    getFeaturedItems(version: "v1" | "v2"): Promise<import("../types/response.type").DefaultErrorsResponse | import("./getFeaturedStoreItems").getFeaturedStoreItems_ResponseData>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-store-offers
     * @param version API version (v1, v2)
     * @returns Store offers retrieved successfully
     */
    getOffers(version: "v1" | "v2"): Promise<import("../types/response.type").DefaultApiResponse<import("./getStoreOffers").getStoreOffers_ResponseData> | import("../types/response.type").DefaultErrorsResponse>;
}
