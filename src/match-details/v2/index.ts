import { v2_getMatchDetails } from "./getMatchDetails";

export class v2_MatchDetailsCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-match-details-v2
   * @param matchId Match UUID
   * @returns Match details retrieved successfully
   */
  async get(matchId: string) {
    return await v2_getMatchDetails(this.apiKey, matchId);
  }
}
