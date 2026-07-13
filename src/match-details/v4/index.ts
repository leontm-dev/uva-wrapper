import { v4_getMatchDetails } from "./getMatchDetails";

export class v4_MatchDetailsCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-match-details-v4
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param matchId Match UUID
   * @returns Match details retrieved successfully
   */
  async get(affinity: string, matchId: string) {
    return await v4_getMatchDetails(this.apiKey, affinity, matchId);
  }
}
