import { v1_addPremiumWebhookUser } from "./addPremiumWebhookUser";
import { v1_getPremiumWebhookSettings } from "./getPremiumWebhookSettings";

export class v1_PremiumCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/premium/get-premium-webhook-settings
   * @returns Premium webhook settings and tracked users retrieved successfully
   */
  async getWebhookSettings() {
    return await v1_getPremiumWebhookSettings(this.apiKey);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/premium/add-premium-webhook-user
   * @param enabled
   * @param events
   * @param name
   * @param puuid
   * @param tag
   * @returns Tracked user added successfully
   */
  async addWebhookUser(
    enabled: boolean,
    events: ("MATCH" | "MMR")[],
    name: string | null,
    puuid: string | null,
    tag: string | null,
  ) {
    return await v1_addPremiumWebhookUser(
      this.apiKey,
      enabled,
      events,
      name,
      puuid,
      tag,
    );
  }
}
