import { v1_PremierCategory } from "./v1";

export class PremierCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new PremierCategory(this.apiKey);
  }

  v1: v1_PremierCategory;
}
