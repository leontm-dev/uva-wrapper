import { v1_MiscCategory } from "./v1";

export class MiscCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new v1_MiscCategory(this.apiKey);
  }

  v1: v1_MiscCategory;
}
