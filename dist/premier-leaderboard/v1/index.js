"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1_PremierLeaderboardCategory = void 0;
const getPremierLeaderboard_1 = require("./getPremierLeaderboard");
class v1_PremierLeaderboardCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-leaderboard-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param conference Conference filter (optional)
     * @param division Division filter (optional)
     * @param season Premier season id (optional)
     * @returns Premier leaderboard retrieved successfully
     */
    get(affinity, conference, division, season) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getPremierLeaderboard_1.v1_getPremierLeaderboard)(this.apiKey, affinity, conference, division, season);
        });
    }
}
exports.v1_PremierLeaderboardCategory = v1_PremierLeaderboardCategory;
