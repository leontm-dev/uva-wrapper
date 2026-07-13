import { v1_getPremierTeamHistoryByName } from "./getPremierTeamHistoryByName";

export class v1_PremierHistoryCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-history-by-name-v1
   * @param name Team name
   * @param tag Team tag
   * @param season Premier season id (optional)
   * @returns Premier team history retrieved successfully
   */
  async getByName(name: string, tag: string, season?: string) {
    return await v1_getPremierTeamHistoryByName(this.apiKey, name, tag, season);
  }
}
