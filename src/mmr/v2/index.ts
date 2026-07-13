import { v2_getMMRByName } from "./getMMRByName";
import { v2_getMMRByPuuid } from "./getMMRByPuuid";

export class v2_MMRCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @returns MMR data retrieved successfully
   */
  async getByName(affinity: string, name: string, tag: string) {
    return await v2_getMMRByName(this.apiKey, affinity, name, tag);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-puuid-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param puuid Player UUID
   * @returns MMR data retrieved successfully
   */
  async getByPuuid(affinity: string, puuid: string) {
    return await v2_getMMRByPuuid(this.apiKey, affinity, puuid);
  }
}
