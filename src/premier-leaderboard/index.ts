import { v1_PremierLeaderboardCategory } from "./v1";

export class PremierLeaderboardCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new v1_PremierLeaderboardCategory(this.apiKey);
  }

  v1: v1_PremierLeaderboardCategory;
}
