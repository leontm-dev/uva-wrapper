import { v1_getContent } from "./getContent";
import { v1_getQueueStatus } from "./getQueueStatus";
import { v1_getStatus } from "./getStatus";

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
}
