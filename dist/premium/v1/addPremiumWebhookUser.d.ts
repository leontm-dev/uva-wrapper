import { DefaultErrorsResponse } from "../../types/response.type";
export declare function v1_addPremiumWebhookUser(apiKey: string, enabled: boolean, events: ("MATCH" | "MMR")[], name: string | null, puuid: string | null, tag: string | null): Promise<DefaultErrorsResponse | {
    data: v1_addPremiumWebhookUser_ResponseData;
}>;
export interface v1_addPremiumWebhookUser_ResponseData {
    success: boolean;
    user: {
        created_at: number;
        enabled: boolean;
        events: ("MATCH" | "MMR")[];
        id: string;
        puuid: string;
        region: string;
        updated_at: number;
        last_checked_at: number | null;
        last_match: string | null;
        last_mmr: number | null;
    };
}
