import { v2_getLeaderboard } from "./getLeaderboard";

export class v2_LeaderboardCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v2
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param season Season ID (optional)
   * @param name Player name to search for (optional)
   * @param tag Player tag to search for (optional)
   * @param puuid Player UUID to search for (optional)
   * @returns Leaderboard retrieved successfully
   */
  async get(
    affinity: string,
    season?: string,
    name?: string,
    tag?: string,
    puuid?: string,
  ) {
    return await v2_getLeaderboard(
      this.apiKey,
      affinity,
      season,
      name,
      tag,
      puuid,
    );
  }
}
