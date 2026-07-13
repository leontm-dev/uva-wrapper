import { v1_getMMRHistoryByName } from "./getMMRHistoryByName";
import { v1_getMMRHistoryByPuuid } from "./getMMRHistoryByPuuid";

export class v1_MMRHistoryCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-name-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @returns MMR history retrieved successfully
   */
  async getByName(affinity: string, name: string, tag: string) {
    return await v1_getMMRHistoryByName(this.apiKey, affinity, name, tag);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-puuid-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param puuid Player UUID
   * @returns MMR history retrieved successfully
   */
  async getByPuuid(affinity: string, puuid: string) {
    return await v1_getMMRHistoryByPuuid(this.apiKey, affinity, puuid);
  }
}
