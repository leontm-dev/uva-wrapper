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
exports.v2_LeaderboardCategory = void 0;
const getLeaderboard_1 = require("./getLeaderboard");
class v2_LeaderboardCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-leaderboard-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param season Season ID (optional)
     * @param name Player name to search for (optional)
     * @param tag Player tag to search for (optional)
     * @param puuid Player UUID to search for (optional)
     * @returns Leaderboard retrieved successfully
     */
    get(affinity, season, name, tag, puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getLeaderboard_1.v2_getLeaderboard)(this.apiKey, affinity, season, name, tag, puuid);
        });
    }
}
exports.v2_LeaderboardCategory = v2_LeaderboardCategory;
