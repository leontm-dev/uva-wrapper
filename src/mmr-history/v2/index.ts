import { v2_getMMRHistoryByName } from "./getMMRHistoryByName";
import { v2_getMMRHistoryByPuuid } from "./getMMRHistoryByPuuid";

export class v2_MMRHistoryCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-name-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @returns MMR history retrieved successfully
   */
  async getByName(
    affinity: string,
    platform: string,
    name: string,
    tag: string,
  ) {
    return await v2_getMMRHistoryByName(
      this.apiKey,
      affinity,
      platform,
      name,
      tag,
    );
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-puuid-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param puuid Player UUID
   * @returns MMR history retrieved successfully
   */
  async getByPuuid(affinity: string, platform: string, puuid: string) {
    return await v2_getMMRHistoryByPuuid(
      this.apiKey,
      affinity,
      platform,
      puuid,
    );
  }
}
