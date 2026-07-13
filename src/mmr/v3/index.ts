import { v3_getMMRByName } from "./getMMRByName";

export class v3_MMRCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v3
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @returns MMR data retrieved successfully
   */
  async getName(affinity: string, platform: string, name: string, tag: string) {
    return await v3_getMMRByName(this.apiKey, affinity, platform, name, tag);
  }
}
