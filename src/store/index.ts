import { getFeaturedStoreItems } from "./getFeaturedStoreItems";

export class StoreCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-featured-store-items
   * @param version API version (v1, v2)
   * @returns Store featured items retrieved successfully
   */
  async getFeaturedItems(version: "v1" | "v2") {
    return await getFeaturedStoreItems(this.apiKey, version);
  }
}
