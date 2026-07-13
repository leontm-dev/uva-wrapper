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
exports.v1_StoredMatchesCategory = void 0;
const getStoredMatchesByName_1 = require("./getStoredMatchesByName");
const getStoredMatchesByPuuid_1 = require("./getStoredMatchesByPuuid");
class v1_StoredMatchesCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-matches-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @returns Stored match history retrieved successfully
     */
    getByName(affinity, name, tag, mode, map, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getStoredMatchesByName_1.v1_getStoredMatchesByName)(this.apiKey, affinity, name, tag, mode, map, size);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-matches-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @param mode Game mode filter (optional)
     * @param map Map filter (optional)
     * @param size Number of results (optional)
     * @returns Stored match history retrieved successfully
     */
    getByPuuid(affinity, puuid, mode, map, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getStoredMatchesByPuuid_1.v1_getStoredMatchesByPuuid)(this.apiKey, affinity, puuid, mode, map, size);
        });
    }
}
exports.v1_StoredMatchesCategory = v1_StoredMatchesCategory;
