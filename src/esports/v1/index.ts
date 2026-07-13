import { v1_getEsportsSchedule } from "./getEsportsSchedule";

export class v1_EsportsCategory {
  constructor(private readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-esports-schedule-v1
   * @param region
   * @param league
   * @returns Esports schedule retrieved successfully
   */
  async getSchedule(region?: string, league?: string) {
    return await v1_getEsportsSchedule(this.apiKey, region, league);
  }
}
