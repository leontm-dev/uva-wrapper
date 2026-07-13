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
exports.v2_StoredMMRHistoryCategory = void 0;
const getStoredMMRHistoryByName_1 = require("./getStoredMMRHistoryByName");
const getStoredMMRHistoryByPuuid_1 = require("./getStoredMMRHistoryByPuuid");
class v2_StoredMMRHistoryCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-name-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID name
     * @param size Number of results (optional)
     * @returns Stored MMR history retrieved successfully
     */
    getByName(affinity, platform, name, tag, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getStoredMMRHistoryByName_1.v2_getStoredMMRHistoryByName)(this.apiKey, affinity, platform, name, tag, size);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-stored-mmr-history-by-puuid-v2
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @param size Number of results (optional)
     * @returns Stored MMR history retrieved successfully
     */
    getByPuuid(affinity, platform, puuid, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getStoredMMRHistoryByPuuid_1.v2_getStoredMMRHistoryByPuuid)(this.apiKey, affinity, platform, puuid, size);
        });
    }
}
exports.v2_StoredMMRHistoryCategory = v2_StoredMMRHistoryCategory;
