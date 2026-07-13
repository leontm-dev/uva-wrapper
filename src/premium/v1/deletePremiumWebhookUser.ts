import { doApiRequest } from "../../lib/request-handler";

export async function v1_deletePremiumWebhookUser(apiKey: string, id: string) {
  return await doApiRequest<v1_deletePremiumWebhookUser_ResponseData>(
    apiKey,
    `/public/v1/premium/webhook/users/${id}`,
    {},
    { method: "DELETE" },
  );
}

export interface v1_deletePremiumWebhookUser_ResponseData {
  deleted: true;
}
