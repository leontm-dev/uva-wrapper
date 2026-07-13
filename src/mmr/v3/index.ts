import { v3_getMMRByName } from "./getMMRByName";
import { v3_getMMRByPuuid } from "./getMMRByPuuid";

export class v3_MMRCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v3
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @returns MMR data retrieved successfully
   */
  async getByName(
    affinity: string,
    platform: string,
    name: string,
    tag: string,
  ) {
    return await v3_getMMRByName(this.apiKey, affinity, platform, name, tag);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-puuid-v3
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param puuid Player UUID
   * @returns MMR data retrieved successfully
   */
  async getByPuuid(affinity: string, platform: string, puuid: string) {
    return await v3_getMMRByPuuid(this.apiKey, affinity, platform, puuid);
  }
}
