import { v2_getAccount } from "./getAccount";
import { v2_getAccountByPuuid } from "./getAccountByPuuid";

export class v2_AccountCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-v2
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @param force Bypass cache and refresh (optional)
   * @returns Account data retrieved successfully
   */
  async get(name: string, tag: string, force?: boolean) {
    return await v2_getAccount(this.apiKey, name, tag, force);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-by-puuid-v2
   * @param puuid Player UUID
   * @param force Bypass cache and refresh (optional)
   * @returns Account data retrieved successfully
   */
  async getByPuuid(puuid: string, force?: boolean) {
    return await v2_getAccountByPuuid(this.apiKey, puuid, force);
  }
}
