"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesCategory = void 0;
const v3_1 = require("./v3");
const v4_1 = require("./v4");
class MatchesCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v3 = new v3_1.v3_MatchesCategory(this.apiKey);
        this.v4 = new v4_1.v4_MatchesCategory(this.apiKey);
    }
}
exports.MatchesCategory = MatchesCategory;
