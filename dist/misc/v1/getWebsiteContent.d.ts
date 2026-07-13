export declare function v1_getWebsiteContent(apiKey: string, countryCode: string, category?: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getWebsiteContent_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getWebsiteContent_ResponseData {
    category: string;
    date: string;
    id: string;
    title: string;
    url: string;
    banner_url: string | null;
    description: string | null;
    external_link: string | null;
}
