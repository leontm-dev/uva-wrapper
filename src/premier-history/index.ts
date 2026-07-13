import { v1_PremierHistoryCategory } from "./v1";

export class PremierHistoryCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new v1_PremierHistoryCategory(this.apiKey);
  }

  v1: v1_PremierHistoryCategory;
}
