import { v1_LeaderboardCategory } from "./v1";
import { v2_LeaderboardCategory } from "./v2";
import { v3_LeaderboardCategory } from "./v3";

export class LeaderboardCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new LeaderboardCategory(this.apiKey);
    this.v2 = new LeaderboardCategory(this.apiKey);
    this.v3 = new LeaderboardCategory(this.apiKey);
  }

  v1: v1_LeaderboardCategory;
  v2: v2_LeaderboardCategory;
  v3: v3_LeaderboardCategory;
}
