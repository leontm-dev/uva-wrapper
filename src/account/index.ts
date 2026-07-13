import { v1_AccountCategory } from "./v1";
import { v2_AccountCategory } from "./v2";

export class AccountCategory {
  constructor(public apiKey: string) {
    this.v1 = new v1_AccountCategory(this.apiKey);
    this.v2 = new v2_AccountCategory(this.apiKey);
  }

  v1: v1_AccountCategory;
  v2: v2_AccountCategory;
}
