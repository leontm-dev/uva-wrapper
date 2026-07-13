import { AccountCategory } from "./account";

export class UnofficialValorantAPI {
  constructor(readonly apiKey: string) {
    this.Account = new AccountCategory(this.apiKey);
  }

  Account: AccountCategory;
}
