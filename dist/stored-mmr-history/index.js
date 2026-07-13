"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredMMRHistoryCategory = void 0;
const v1_1 = require("./v1");
const v2_1 = require("./v2");
class StoredMMRHistoryCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_StoredMMRHistoryCategory(this.apiKey);
        this.v2 = new v2_1.v2_StoredMMRHistoryCategory(this.apiKey);
    }
}
exports.StoredMMRHistoryCategory = StoredMMRHistoryCategory;
