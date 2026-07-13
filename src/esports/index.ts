import { v1_EsportsCategory } from "./v1";

export class EsportsCategory {
  constructor(private readonly apiKey: string) {
    this.v1 = new v1_EsportsCategory(this.apiKey);
  }

  v1: v1_EsportsCategory;
}
