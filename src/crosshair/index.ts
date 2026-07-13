import { v1_CrosshairCategory } from "./v1";

export class CrosshairCategory {
  constructor(readonly apiKey: string) {
    this.v1 = new v1_CrosshairCategory(this.apiKey);
  }

  v1: v1_CrosshairCategory;
}
