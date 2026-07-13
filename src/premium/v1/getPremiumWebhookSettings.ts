import { doApiRequest } from "../../lib/request-handler";

export async function v1_getPremiumWebhookSettings(apiKey: string) {
  return await doApiRequest(
    apiKey,
    "/public/v1/premium/webhook",
    {},
    { method: "GET" },
  );
}
