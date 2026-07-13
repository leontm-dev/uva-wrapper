import { v1_getAccount } from "./getAccount";
import { v1_getAccountByPuuid } from "./getAccountByPuuid";

export class v1_AccountCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-by-puuid-v1
   * @param puuid Player UUID
   * @param force Bypass cache and refresh (optional)
   * @returns Account data retrieved successfully
   */
  async getByPuuid(puuid: string, force?: boolean) {
    return await v1_getAccountByPuuid(this.apiKey, puuid, force);
  }

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-v1
   * @param name Riot ID name
   * @param tag Riot ID tag
   * @param force Bypass cache and refresh (optional)
   * @returns Account data retrieved successfully
   */
  async get(name: string, tag: string, force?: boolean) {
    return await v1_getAccount(this.apiKey, name, tag, force);
  }
}
