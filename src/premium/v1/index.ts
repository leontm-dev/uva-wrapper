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
}
