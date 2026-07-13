export declare function v1_getGameVersion(apiKey: string, affinity: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getGameVersion_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getGameVersion_ResponseData {
    branch: string;
    build_date: string;
    build_ver: string;
    last_checked: string;
    region: string;
    version: number;
    version_for_api: string;
}
