import { v2_getStoredMMRHistoryByName } from "./getStoredMMRHistoryByName";
import { v2_getStoredMMRHistoryByPuuid } from "./getStoredMMRHistoryByPuuid";

export class v2_StoredMMRHistoryCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-name-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param name Riot ID name
   * @param tag Riot ID name
   * @param size Number of results (optional)
   * @returns Stored MMR history retrieved successfully
   */
  async getByName(
    affinity: string,
    platform: string,
    name: string,
    tag: string,
    size?: number,
  ) {
    return await v2_getStoredMMRHistoryByName(
      this.apiKey,
      affinity,
      platform,
      name,
      tag,
      size,
    );
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-puuid-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param puuid Player UUID
   * @param size Number of results (optional)
   * @returns Stored MMR history retrieved successfully
   */
  async getByPuuid(
    affinity: string,
    platform: string,
    puuid: string,
    size?: number,
  ) {
    return await v2_getStoredMMRHistoryByPuuid(
      this.apiKey,
      affinity,
      platform,
      puuid,
      size,
    );
  }
}
