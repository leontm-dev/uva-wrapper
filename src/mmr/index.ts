import { v1_MMRCategory } from "./v1";
import { v2_MMRCategory } from "./v2";
import { v3_MMRCategory } from "./v3";

export class MMRCategory {
  constructor(private readonly apiKey: string) {
    this.v1 = new v1_MMRCategory(this.apiKey);
    this.v2 = new v2_MMRCategory(this.apiKey);
    this.v3 = new v3_MMRCategory(this.apiKey);
  }

  v1: v1_MMRCategory;
  v2: v2_MMRCategory;
  v3: v3_MMRCategory;
}
