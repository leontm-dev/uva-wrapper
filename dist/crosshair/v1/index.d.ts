export declare class v1_CrosshairCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/generate-crosshair-image-v1
     * @param id Crosshair code
     * @returns Crosshair image generated successfully
     */
    generateImage(id?: string): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
}
