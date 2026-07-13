import { v3_getMatchesByName } from "./getMatchesByName";
import { v3_getMatchesByPuuid } from "./getMatchesByPuuid";

export class v3_MatchesCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-name-v3
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @param mode Game mode filter (optional)
   * @param map Map filter (optional)
   * @param size Number of results (optional)
   * @returns Match history retrieved successfully
   */
  async getByName(
    affinity: string,
    name: string,
    tag: string,
    mode?: "Competitive" | "Unrated" | "Custom" | "Practice" | "Unknown",
    map?: string,
    size?: number,
  ) {
    return await v3_getMatchesByName(
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
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-puuid-v3
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param puuid Player UUID
   * @param mode Game mode filter (optional)
   * @param map Map filter (optional)
   * @param size Number of results (optional)
   * @returns Match history retrieved successfully
   */
  async getByPuuid(
    affinity: string,
    puuid: string,
    mode?: string,
    map?: string,
    size?: number,
  ) {
    return await v3_getMatchesByPuuid(
      this.apiKey,
      affinity,
      puuid,
      mode,
      map,
      size,
    );
  }
}
