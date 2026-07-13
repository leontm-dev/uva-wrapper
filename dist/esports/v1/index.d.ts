export declare class v1_EsportsCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-esports-schedule-v1
     * @param region
     * @param league
     * @returns Esports schedule retrieved successfully
     */
    getSchedule(region?: string, league?: string): Promise<import("../../types/response.type").DefaultApiResponse<import("./getEsportsSchedule").v1_getEsportsSchedule_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
}
