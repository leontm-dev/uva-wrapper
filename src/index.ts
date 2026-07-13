import { AccountCategory } from "./account";
import { MMRCategory } from "./mmr";

export class UnofficialValorantAPI {
  constructor(readonly apiKey: string) {
    this.Account = new AccountCategory(this.apiKey);
    this.MMR = new MMRCategory(this.apiKey);
  }

  Account: AccountCategory;
  MMR: MMRCategory;
}
