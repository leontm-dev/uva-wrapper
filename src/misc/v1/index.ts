import { v1_getContent } from "./getContent";

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
}
