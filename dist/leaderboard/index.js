"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardCategory = void 0;
const v1_1 = require("./v1");
const v2_1 = require("./v2");
const v3_1 = require("./v3");
class LeaderboardCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_LeaderboardCategory(this.apiKey);
        this.v2 = new v2_1.v2_LeaderboardCategory(this.apiKey);
        this.v3 = new v3_1.v3_LeaderboardCategory(this.apiKey);
    }
}
exports.LeaderboardCategory = LeaderboardCategory;
