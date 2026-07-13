import { v1_getStoredMMRHistoryByName } from "./getStoredMMRHistoryByName";
import { v1_getStoredMMRHistoryByPuuid } from "./getStoredMMRHistoryByPuuid";

export class v1_StoredMMRHistoryCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-name-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @param size Number of results (optional)
   * @returns Stored MMR history retrieved successfully
   */
  async getByName(affinity: string, name: string, tag: string, size?: number) {
    return await v1_getStoredMMRHistoryByName(
      this.apiKey,
      affinity,
      name,
      tag,
      size,
    );
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-puuid-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param puuid Player UUID
   * @param size Number of results (optional)
   * @returns Stored MMR history retrieved successfully
   */
  async getByPuuid(affinity: string, puuid: string, size?: number) {
    return await v1_getStoredMMRHistoryByPuuid(
      this.apiKey,
      affinity,
      puuid,
      size,
    );
  }
}
