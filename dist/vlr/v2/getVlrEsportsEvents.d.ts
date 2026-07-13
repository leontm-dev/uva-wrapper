export declare function v2_getVlrEsportsEvents(apiKey: string, region?: "north_america" | "europe" | "brazil" | "asia_pacific" | "korea" | "japan" | "latin_america" | "oceania" | "mena" | "gc" | "collegiate", type?: "completed" | "upcoming", page?: number): Promise<import("../../types/response.type").DefaultApiResponse<v2_getVlrEsportsEvents_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getVlrEsportsEvents_ResponseData {
    dates: {
        end: string;
        start: string;
    };
    icon: string;
    id: number;
    price: string;
    region: string;
    slug: string;
    status: "completed" | "ongoing" | "upcoming" | "unknown";
    title: string;
}
