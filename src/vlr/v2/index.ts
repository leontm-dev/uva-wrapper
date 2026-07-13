import { v2_getVlrEsportsEvents } from "./getVlrEsportsEvents";
import { v2_getVlrEventMatches } from "./getVlrEventMatches";
import { v2_getVlrMatchDetails } from "./getVlrMatchDetails";
import { v2_getVlrTeam } from "./getVlrTeam";
import { v2_getVlrTeamMatches } from "./getVlrTeamMatches";

export class v2_VlrCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-esports-events-v2
   * @param region
   * @param type
   * @param page
   * @returns Esports events retrieved successfully
   */
  async getEsportsEvents(
    region?:
      | "north_america"
      | "europe"
      | "brazil"
      | "asia_pacific"
      | "korea"
      | "japan"
      | "latin_america"
      | "oceania"
      | "mena"
      | "gc"
      | "collegiate",
    type?: "completed" | "upcoming",
    page?: number,
  ) {
    return await v2_getVlrEsportsEvents(this.apiKey, region, type, page);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-event-matches-v2
   * @param eventId
   * @returns Esports event matches retrieved successfully
   */
  async getEventMatches(eventId: number) {
    return await v2_getVlrEventMatches(this.apiKey, eventId);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-match-details-v2
   * @param matchId
   * @returns Esports match details retrieved successfully
   */
  async getMatchDetails(matchId: number) {
    return await v2_getVlrMatchDetails(this.apiKey, matchId);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-v2
   * @param teamId
   * @returns Esports team profile retrieved successfully
   */
  async getTeam(teamId: number) {
    return await v2_getVlrTeam(this.apiKey, teamId);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-matches-v2
   * @param teamId
   * @param page
   * @returns Esports team matches retrieved successfully
   */
  async getTeamMatches(teamId: number, page?: number) {
    return await v2_getVlrTeamMatches(this.apiKey, teamId, page);
  }
}
