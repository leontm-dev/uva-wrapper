import { v1_getStoredMatchesByName } from "./getStoredMatchesByName";
import { v1_getStoredMatchesByPuuid } from "./getStoredMatchesByPuuid";

export class v1_StoredMatchesCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-matches-by-name-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @param mode Game mode filter (optional)
   * @param map Map filter (optional)
   * @param size Number of results (optional)
   * @returns Stored match history retrieved successfully
   */
  async getByName(
    affinity: string,
    name: string,
    tag: string,
    mode?: string,
    map?: string,
    size?: number,
  ) {
    return await v1_getStoredMatchesByName(
      this.apiKey,
      affinity,
      name,
      tag,
      mode,
      map,
      size,
    );
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-matches-by-puuid-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param puuid Player UUID
   * @param mode Game mode filter (optional)
   * @param map Map filter (optional)
   * @param size Number of results (optional)
   * @returns Stored match history retrieved successfully
   */
  async getByPuuid(
    affinity: string,
    puuid: string,
    mode?: string,
    map?: string,
    size?: number,
  ) {
    return await v1_getStoredMatchesByPuuid(
      this.apiKey,
      affinity,
      puuid,
      mode,
      map,
      size,
    );
  }
}
