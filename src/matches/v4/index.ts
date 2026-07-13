import { v4_getMatchesByName } from "./getMatchesByName";
import { v4_getMatchesByPuuid } from "./getMatchesByPuuid";

export class v4_MatchesCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-name-v4
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @param mode Game mode filter (optional)
   * @param map Map filter (optional)
   * @param size Number of results (optional)
   * @param start Start index for pagination (optional)
   * @returns Match history retrieved successfully
   */
  async getByName(
    affinity: string,
    platform: string,
    name: string,
    tag: string,
    mode?: string,
    map?: string,
    size?: number,
    start?: number,
  ) {
    return await v4_getMatchesByName(
      this.apiKey,
      affinity,
      platform,
      name,
      tag,
      mode,
      map,
      size,
      start,
    );
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-puuid-v4
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param puuid Player UUID
   * @param mode Game mode filter (optional)
   * @param map Map filter (optional)
   * @param size Number of results (optional)
   * @param start Start index for pagination (optional)
   * @returns Match history retrieved successfully
   */
  async getByPuuid(
    affinity: string,
    platform: string,
    puuid: string,
    mode?: string,
    map?: string,
    size?: number,
    start?: number,
  ) {
    return await v4_getMatchesByPuuid(
      this.apiKey,
      affinity,
      platform,
      puuid,
      mode,
      map,
      size,
      start,
    );
  }
}
