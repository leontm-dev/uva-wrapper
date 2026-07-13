"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremierCategory = void 0;
const v1_1 = require("./v1");
class PremierCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_PremierCategory(this.apiKey);
    }
}
exports.PremierCategory = PremierCategory;
