"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremierLeaderboardCategory = void 0;
const v1_1 = require("./v1");
class PremierLeaderboardCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_PremierLeaderboardCategory(this.apiKey);
    }
}
exports.PremierLeaderboardCategory = PremierLeaderboardCategory;
