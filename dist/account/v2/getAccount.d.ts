export declare function v2_getAccount(apiKey: string, name: string, tag: string, force?: boolean): Promise<import("../../types/response.type").DefaultApiResponse<v2_getAccount_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getAccount_ResponseData {
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
