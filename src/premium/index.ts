import { v1_PremiumCategory } from "./v1";

export class PremiumCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new v1_PremiumCategory(this.apiKey);
  }

  v1: v1_PremiumCategory;
}
