import { v1_StoredMMRHistoryCategory } from "./v1";
import { v2_StoredMMRHistoryCategory } from "./v2";

export class StoredMMRHistoryCategory {
  constructor(private readonly apiKey: string) {
    this.v1 = new v1_StoredMMRHistoryCategory(this.apiKey);
    this.v2 = new v2_StoredMMRHistoryCategory(this.apiKey);
  }

  v1: v1_StoredMMRHistoryCategory;
  v2: v2_StoredMMRHistoryCategory;
}
