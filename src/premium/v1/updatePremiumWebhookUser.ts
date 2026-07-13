import { doApiRequest } from "../../lib/request-handler";

export async function v1_updatePremiumWebhookUser(
  apiKey: string,
  id: string,
  events: ("MATCH" | "MMR")[],
) {
  return await doApiRequest(
    apiKey,
    `/public/v1/premium/webhook/users/${id}`,
    {},
    { method: "PUT", body: JSON.stringify({ events }) },
  );
}
