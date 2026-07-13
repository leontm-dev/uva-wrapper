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
exports.v4_MatchesCategory = void 0;
const getMatchesByName_1 = require("./getMatchesByName");
const getMatchesByPuuid_1 = require("./getMatchesByPuuid");
class v4_MatchesCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-name-v4
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @param start Start index for pagination (optional)
     * @returns Match history retrieved successfully
     */
    getByName(affinity, platform, name, tag, mode, map, size, start) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMatchesByName_1.v4_getMatchesByName)(this.apiKey, affinity, platform, name, tag, mode, map, size, start);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-matches-by-puuid-v4
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @param start Start index for pagination (optional)
     * @returns Match history retrieved successfully
     */
    getByPuuid(affinity, platform, puuid, mode, map, size, start) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMatchesByPuuid_1.v4_getMatchesByPuuid)(this.apiKey, affinity, platform, puuid, mode, map, size, start);
        });
    }
}
exports.v4_MatchesCategory = v4_MatchesCategory;
