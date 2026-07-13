import { v1_StoredMatchesCategory } from "./v1";

export class StoredMatchesCategory {
  constructor(private readonly apiKey: string) {
    this.v1 = new v1_StoredMatchesCategory(this.apiKey);
  }

  v1: v1_StoredMatchesCategory;
}
