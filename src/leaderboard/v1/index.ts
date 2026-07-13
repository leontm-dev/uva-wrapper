import { v1_getLeaderboard } from "./getLeaderboard";

export class v1_LeaderboardCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param season Season ID (optional)
   * @param name Player name to search for (optional)
   * @param tag Player tag to search for (optional)
   * @returns Leaderboard retrieved successfully
   */
  async get(affinity: string, season?: string, name?: string, tag?: string) {
    return await v1_getLeaderboard(this.apiKey, affinity, season, name, tag);
  }
}
