import { doApiRequest } from "../../lib/request-handler";
import { DefaultErrorsResponse } from "../../types/response.type";

export async function v1_addPremiumWebhookUser(
  apiKey: string,
  enabled: boolean,
  events: ("MATCH" | "MMR")[],
  name: string | null,
  puuid: string | null,
  tag: string | null,
) {
  return (await doApiRequest(
    apiKey,
    "/public/v1/premium/webhook/users",
    {},
    {
      method: "POST",
      body: JSON.stringify({ enabled, events, name, puuid, tag }),
    },
  )) as { data: v1_addPremiumWebhookUser_ResponseData } | DefaultErrorsResponse;
}

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
