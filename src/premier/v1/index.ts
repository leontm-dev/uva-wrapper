import { v1_searchPremierTeams } from "./searchPremierTeams";

export class v1_PremierCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/search-premier-teams-v1
   * @param name Team name to search for (optional)
   * @param tag Team tag to search for (optional)
   * @param id Team UUID to search for (optional)
   * @param season Premier season id (optional)
   * @returns Premier team search results retrieved successfully
   */
  async search(name?: string, tag?: string, id?: string, season?: string) {
    return await v1_searchPremierTeams(this.apiKey, name, tag, id, season);
  }
}
