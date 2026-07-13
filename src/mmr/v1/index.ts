import { v1_getMMRByName } from "./getMMRByName";

export class v1_MMRCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @returns MMR data retrieved successfully
   */
  async getByName(affinity: string, name: string, tag: string) {
    return await v1_getMMRByName(this.apiKey, affinity, name, tag);
  }
}
