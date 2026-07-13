export declare function v2_getAccountByPuuid(apiKey: string, puuid: string, force?: boolean): Promise<import("../../types/response.type").DefaultApiResponse<v2_getAccountByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getAccountByPuuid_ResponseData {
    account_level: number;
    card: string;
    name: string;
    platforms: string[];
    puuid: string;
    region: string;
    tag: string;
    title: string;
    updated_at: string;
}
