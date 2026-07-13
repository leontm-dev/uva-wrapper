import { v3_MatchesCategory } from "./v3";
import { v4_MatchesCategory } from "./v4";

export class MatchesCategory {
  constructor(private readonly apiKey: string) {
    this.v3 = new v3_MatchesCategory(this.apiKey);
    this.v4 = new v4_MatchesCategory(this.apiKey);
  }

  v3: v3_MatchesCategory;
  v4: v4_MatchesCategory;
}
