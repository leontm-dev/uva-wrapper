import { v3_getLeaderboard } from "./getLeaderboard";

export class v3_LeaderboardCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v3
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param platform Platform (pc, console)
   * @param season Season ID (optional)
   * @param size Number of results per page (optional)
   * @param page Page number (optional)
   * @param name Player name to search for (optional)
   * @param tag Player tag to search for (optional)
   * @returns Leaderboard retrieved successfully
   */
  async get(
    affinity: string,
    platform: string,
    season?: string,
    size?: number,
    page?: number,
    name?: string,
    tag?: string,
  ) {
    return await v3_getLeaderboard(
      this.apiKey,
      affinity,
      platform,
      season,
      size,
      page,
      name,
      tag,
    );
  }
}
