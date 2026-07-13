"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MMRHistoryCategory = void 0;
const v1_1 = require("./v1");
const v2_1 = require("./v2");
class MMRHistoryCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_MMRHistoryCategory(this.apiKey);
        this.v2 = new v2_1.v2_MMRHistoryCategory(this.apiKey);
    }
}
exports.MMRHistoryCategory = MMRHistoryCategory;
