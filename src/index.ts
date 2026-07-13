import { AccountCategory } from "./account";
import { CrosshairCategory } from "./crosshair";
import { EsportsCategory } from "./esports";
import { LeaderboardCategory } from "./leaderboard";
import { MatchDetailsCategory } from "./match-details";
import { MatchesCategory } from "./matches";
import { MMRCategory } from "./mmr";
import { MMRHistoryCategory } from "./mmr-history";
import { PremierCategory } from "./premier";
import { PremierHistoryCategory } from "./premier-history";
import { PremierLeaderboardCategory } from "./premier-leaderboard";
import { PremiumCategory } from "./premium";
import { StoreCategory } from "./store";
import { StoredMatchesCategory } from "./stored-matches";
import { StoredMMRHistoryCategory } from "./stored-mmr-history";
import { v1_MainCategory } from "./v1";
import { VlrCategory } from "./vlr";

export class UnofficialValorantAPI {
  constructor(readonly apiKey: string) {
    this.Account = new AccountCategory(this.apiKey);
    this.Crosshair = new CrosshairCategory(this.apiKey);
    this.Esports = new EsportsCategory(this.apiKey);
    this.Leaderboard = new LeaderboardCategory(this.apiKey);
    this.Match_Details = new MatchDetailsCategory(this.apiKey);
    this.Matches = new MatchesCategory(this.apiKey);
    this.MMR = new MMRCategory(this.apiKey);
    this.MMR_History = new MMRHistoryCategory(this.apiKey);
    this.Premier = new PremierCategory(this.apiKey);
    this.Premier_History = new PremierHistoryCategory(this.apiKey);
    this.Premier_Leaderboard = new PremierLeaderboardCategory(this.apiKey);
    this.Premium = new PremiumCategory(this.apiKey);
    this.Store = new StoreCategory(this.apiKey);
    this.Stored_Matches = new StoredMatchesCategory(this.apiKey);
    this.Stored_MMR_History = new StoredMMRHistoryCategory(this.apiKey);
    this.v1 = new v1_MainCategory(this.apiKey);
    this.Vlr = new VlrCategory(this.apiKey);
  }

  Account: AccountCategory;
  Crosshair: CrosshairCategory;
  Esports: EsportsCategory;
  Leaderboard: LeaderboardCategory;
  Match_Details: MatchDetailsCategory;
  Matches: MatchesCategory;
  MMR: MMRCategory;
  MMR_History: MMRHistoryCategory;
  Premier: PremierCategory;
  Premier_History: PremierHistoryCategory;
  Premier_Leaderboard: PremierLeaderboardCategory;
  Premium: PremiumCategory;
  Store: StoreCategory;
  Stored_Matches: StoredMatchesCategory;
  Stored_MMR_History: StoredMMRHistoryCategory;
  v1: v1_MainCategory;
  Vlr: VlrCategory;
}
