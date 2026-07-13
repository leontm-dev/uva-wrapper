export declare class v1_PremiumCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/get-premium-webhook-settings
     * @returns Premium webhook settings and tracked users retrieved successfully
     */
    getWebhookSettings(): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/add-premium-webhook-user
     * @param enabled
     * @param events
     * @param name
     * @param puuid
     * @param tag
     * @returns Tracked user added successfully
     */
    addWebhookUser(enabled: boolean, events: ("MATCH" | "MMR")[], name: string | null, puuid: string | null, tag: string | null): Promise<import("../../types/response.type").DefaultErrorsResponse | {
        data: import("./addPremiumWebhookUser").v1_addPremiumWebhookUser_ResponseData;
    }>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/update-premium-webhook-user
     * @param id Tracked user id
     * @param events
     * @returns Tracked user updated successfully
     */
    updateWebhookUser(id: string, events: ("MATCH" | "MMR")[]): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/delete-premium-webhook-user
     * @param id Tracked user id
     * @returns Tracked user removed successfully
     */
    deleteWebhookUser(id: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./deletePremiumWebhookUser").v1_deletePremiumWebhookUser_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
}
