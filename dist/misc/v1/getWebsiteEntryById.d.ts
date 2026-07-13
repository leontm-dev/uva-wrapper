export declare function v1_getWebsiteEntryById(apiKey: string, dbId: string, countryCode: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getWebsiteEntryById_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getWebsiteEntryById_ResponseData {
    category: string;
    date: string;
    title: string;
    url: string;
    banner_url: string | null;
    content: string | null;
    description: string | null;
    external_link: string | null;
}
