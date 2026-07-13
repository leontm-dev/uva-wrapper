export declare class v1_AccountCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-by-puuid-v1
     * @param puuid Player UUID
     * @param force Bypass cache and refresh (optional)
     * @returns Account data retrieved successfully
     */
    getByPuuid(puuid: string, force?: boolean): Promise<import("../../types/response.type").DefaultApiResponse<import("./getAccountByPuuid").v1_getAccountByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-v1
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param force Bypass cache and refresh (optional)
     * @returns Account data retrieved successfully
     */
    get(name: string, tag: string, force?: boolean): Promise<import("../../types/response.type").DefaultApiResponse<import("./getAccount").v1_getAccount_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
