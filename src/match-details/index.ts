import { v2_MatchDetailsCategory } from "./v2";
import { v4_MatchDetailsCategory } from "./v4";

export class MatchDetailsCategory {
  constructor(readonly apiKey: string) {
    this.v2 = new v2_MatchDetailsCategory(this.apiKey);
    this.v4 = new v4_MatchDetailsCategory(this.apiKey);
  }

  v2: v2_MatchDetailsCategory;
  v4: v4_MatchDetailsCategory;
}
