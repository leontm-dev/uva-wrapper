"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumCategory = void 0;
const v1_1 = require("./v1");
class PremiumCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_PremiumCategory(this.apiKey);
    }
}
exports.PremiumCategory = PremiumCategory;
