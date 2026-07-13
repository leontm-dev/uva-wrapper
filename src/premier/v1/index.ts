import { v1_getPremierTeamById } from "./getPremierTeamById";
import { v1_getPremierTeamByName } from "./getPremierTeamByName";
import { v1_searchPremierTeams } from "./searchPremierTeams";

export class v1_PremierCategory {
  constructor(private readonly apiKey: string) {}

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

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-by-id-v1
   * @param id Team UUID
   * @param season Premier season id (optional)
   * @param affinity Region/affinity for fallback resolution (optional)
   * @returns Premier team data retrieved successfully
   */
  async getById(id: string, season?: string, affinity?: string) {
    return await v1_getPremierTeamById(this.apiKey, id, season, affinity);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-by-name-v1
   * @param name Team name
   * @param tag Team tag
   * @param season Premier season id (optional)
   * @param affinity Region/affinity for fallback resolution (optional)
   * @returns Premier team data retrieved successfully
   */
  async getByName(
    name: string,
    tag: string,
    season?: string,
    affinity?: string,
  ) {
    return await v1_getPremierTeamByName(
      this.apiKey,
      name,
      tag,
      season,
      affinity,
    );
  }
}
