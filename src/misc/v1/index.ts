import { v1_getContent } from "./getContent";
import { v1_getGameVersion } from "./getGameVersion";
import { v1_getQueueStatus } from "./getQueueStatus";
import { v1_getStatus } from "./getStatus";
import { v1_getWebsiteContent } from "./getWebsiteContent";

export class v1_MiscCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-content-v1
   * @param locale Locale code (e.g., en-US, de-DE) - optional
   * @returns Content retrieved successfully
   */
  async getContent(locale?: string) {
    return await v1_getContent(this.apiKey, locale);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-status-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @returns Status retrieved successfully
   */
  async getStatus(affinity: string) {
    return await v1_getStatus(this.apiKey, affinity);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-queue-status-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @returns Queue status retrieved successfully
   */
  async getQueueStatus(affinity: string) {
    return await v1_getQueueStatus(this.apiKey, affinity);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-game-version-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @returns Version data retrieved successfully
   */
  async getGameVersion(affinity: string) {
    return await v1_getGameVersion(this.apiKey, affinity);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-website-content-v1
   * @param countryCode Country code (e.g., en-us, de-de)
   * @param category Category filter (optional)
   * @returns Website content retrieved successfully
   */
  async getWebsiteContent(countryCode: string, category?: string) {
    return await v1_getWebsiteContent(this.apiKey, countryCode, category);
  }
}
