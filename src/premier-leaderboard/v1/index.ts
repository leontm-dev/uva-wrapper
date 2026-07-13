import { v1_getPremierLeaderboard } from "./getPremierLeaderboard";

export class v1_PremierLeaderboardCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-leaderboard-v1
   * @param affinity Region/affinity (e.g., na, eu, ap, kr)
   * @param conference Conference filter (optional)
   * @param division Division filter (optional)
   * @param season Premier season id (optional)
   * @returns Premier leaderboard retrieved successfully
   */
  async get(
    affinity: string,
    conference?: string,
    division?: string,
    season?: string,
  ) {
    return await v1_getPremierLeaderboard(
      this.apiKey,
      affinity,
      conference,
      division,
      season,
    );
  }
}
