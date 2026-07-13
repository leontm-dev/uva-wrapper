import { v2_VlrCategory } from "./v2";

export class VlrCategory {
  constructor(readonly apiKey: string) {
    this.v2 = new v2_VlrCategory(this.apiKey);
  }

  v2: v2_VlrCategory;
}
