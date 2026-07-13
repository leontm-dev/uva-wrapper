export declare function v1_getAccountByPuuid(apiKey: string, puuid: string, force?: boolean): Promise<import("../../types/response.type").DefaultApiResponse<v1_getAccountByPuuid_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getAccountByPuuid_ResponseData {
    account_level: number;
    card: {
        id: string;
        large: string;
        small: string;
        wide: string;
    };
    last_update: string;
    last_update_raw: number;
    name: string;
    puuid: string;
    region: string;
    tag: string;
}
