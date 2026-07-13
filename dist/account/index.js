"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCategory = void 0;
const v1_1 = require("./v1");
const v2_1 = require("./v2");
class AccountCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_AccountCategory(this.apiKey);
        this.v2 = new v2_1.v2_AccountCategory(this.apiKey);
    }
}
exports.AccountCategory = AccountCategory;
