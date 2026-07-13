import { AccountCategory } from "./account";
import { MMRCategory } from "./mmr";
import { MMRHistoryCategory } from "./mmr-history";

export class UnofficialValorantAPI {
  constructor(readonly apiKey: string) {
    this.Account = new AccountCategory(this.apiKey);
    this.MMR = new MMRCategory(this.apiKey);
    this.MMR_History = new MMRHistoryCategory(this.apiKey);
  }

  Account: AccountCategory;
  MMR: MMRCategory;
  MMR_History: MMRHistoryCategory;
}
