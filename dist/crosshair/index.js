"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrosshairCategory = void 0;
const v1_1 = require("./v1");
class CrosshairCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_CrosshairCategory(this.apiKey);
    }
}
exports.CrosshairCategory = CrosshairCategory;
