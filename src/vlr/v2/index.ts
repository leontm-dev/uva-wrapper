import { v2_getVlrEsportsEvents } from "./getVlrEsportsEvents";

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
}
