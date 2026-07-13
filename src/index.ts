import { AccountCategory } from "./account";
import { MatchDetailsCategory } from "./match-details";
import { MatchesCategory } from "./matches";
import { MMRCategory } from "./mmr";
import { MMRHistoryCategory } from "./mmr-history";

export class UnofficialValorantAPI {
  constructor(readonly apiKey: string) {
    this.Account = new AccountCategory(this.apiKey);
    this.Match_Details = new MatchDetailsCategory(this.apiKey);
    this.Matches = new MatchesCategory(this.apiKey);
    this.MMR = new MMRCategory(this.apiKey);
    this.MMR_History = new MMRHistoryCategory(this.apiKey);
  }

  Account: AccountCategory;
  Match_Details: MatchDetailsCategory;
  Matches: MatchesCategory;
  MMR: MMRCategory;
  MMR_History: MMRHistoryCategory;
}
