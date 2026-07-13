"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchDetailsCategory = void 0;
const v2_1 = require("./v2");
const v4_1 = require("./v4");
class MatchDetailsCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v2 = new v2_1.v2_MatchDetailsCategory(this.apiKey);
        this.v4 = new v4_1.v4_MatchDetailsCategory(this.apiKey);
    }
}
exports.MatchDetailsCategory = MatchDetailsCategory;
