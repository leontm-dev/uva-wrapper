"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremierHistoryCategory = void 0;
const v1_1 = require("./v1");
class PremierHistoryCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_PremierHistoryCategory(this.apiKey);
    }
}
exports.PremierHistoryCategory = PremierHistoryCategory;
