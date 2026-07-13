import { v1_MMRHistoryCategory } from "./v1";
import { v2_MMRHistoryCategory } from "./v2";

export class MMRHistoryCategory {
  constructor(private readonly apiKey: string) {
    this.v1 = new v1_MMRHistoryCategory(this.apiKey);
    this.v2 = new v2_MMRHistoryCategory(this.apiKey);
  }

  v1: v1_MMRHistoryCategory;
  v2: v2_MMRHistoryCategory;
}
