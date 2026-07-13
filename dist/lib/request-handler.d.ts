import { DefaultApiResponse, DefaultErrorsResponse } from "../types/response.type";
export declare function doApiRequest<T>(apiKey: string, url: string, query?: Record<string, string | undefined>, init?: RequestInit & {
    method: "GET" | "POST" | "PUT" | "DELETE";
}): Promise<DefaultApiResponse<T> | DefaultErrorsResponse>;
